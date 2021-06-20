var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;
var Services = require('../models/services');
var ObjectId = require('mongodb').ObjectId;
var servicelist = require('../services-list.json');
var cmd = require('node-cmd');

cmd.run(`net use \\\\${servicelist.windows.set1.tc.creds.ip} ${servicelist.windows.set1.tc.creds.password} /user:${servicelist.windows.set1.tc.creds.username}`, function (err, data, stderr) {
  console.log('Result : ', data);
});

/* GET home page. */
router.get('/', function (req, res, next) {
  Services.find({}).then(function (Status) {
    res.send(Status);
  });
});

router.post('/create', function (req, res, next) {
  Services.create({ $push: { 'Windows': req.body } }).then(function (Status) {
    res.send(Status);
  })
});

router.patch('/update', function (req, res, next) {
  Services.findOneAndUpdate({ _id: ObjectId("60bd94e2a0b1d01630da5b36") }, { $pull: { "Windows.0.TC": req.body } }, { new: true }).then(function () {
    for (var key in servicelist.windows.set1.tc) {

      if (servicelist.windows.set1.tc.hasOwnProperty(key) && key != 'creds') {
        exec(`sc \\\\${servicelist.windows.set1.tc.creds.ip} query ${servicelist.windows.set1.tc[key]}`, (error, results) => {
          if (error) {
            res.status(400).send(error);
          }

          var obj = results.split(/\r?\n/).reduce(function (jsonres, status) {
            var s = status.split(':');
            jsonres[s.shift()] = s.join(':');
            return jsonres;
          }, {});

          req.body = JSON.parse(JSON.stringify(obj).replace(/\s/g, ''));

          Services.updateOne({ _id: ObjectId("60bd94e2a0b1d01630da5b36") }, { $addToSet: { "Windows.0.TC": req.body } }, { new: true }).then(function (Status) {
            res.send(Status);
          })
        })
      }
    }
  })

});

router.patch('/start/:id', function (req, res, next) {
  var key = 'Teamcenter Log Aggregator';
  exec(`sc \\\\${servicelist.windows.set1.tc.creds.ip} start ${servicelist.windows.set1.tc[key]}`, (error, results) => {
    if (error) {
      res.status(400).send(error);
    }

    var obj = results.split(/\r?\n/).reduce(function (jsonres, status) {
      var s = status.split(':');
      jsonres[s.shift()] = s.join(':');
      return jsonres;
    }, {});

    req.body = JSON.parse(JSON.stringify(obj).replace(/\s/g, ''));

    Services.updateOne({ _id: ObjectId("60bd94e2a0b1d01630da5b36"), "Windows.0.TC._id": req.params.id }, { $set: { "Windows.0.TC.$": req.body } }, { new: true }).then(function (Status) {
      res.send(Status);
    })
  })
});

router.patch('/stop/:id', function (req, res, next) {
  var key = 'Teamcenter Log Aggregator';
  exec(`sc \\\\${servicelist.windows.set1.tc.creds.ip} stop ${servicelist.windows.set1.tc[key]}`, (error, results) => {
    if (error) {
      res.status(400).send(error);
    }

    var obj = results.split(/\r?\n/).reduce(function (jsonres, status) {
      var s = status.split(':');
      jsonres[s.shift()] = s.join(':');
      return jsonres;
    }, {});

    req.body = JSON.parse(JSON.stringify(obj).replace(/\s/g, ''));

    Services.updateOne({ _id: ObjectId("60bd94e2a0b1d01630da5b36"), "Windows.0.TC._id": req.params.id }, { $set: { "Windows.0.TC.$": req.body } }, { new: true }).then(function (Status) {
      res.send(Status);
    })
  })
});


router.delete('/delete/:id', function (req, res, next) {
  Services.updateOne({ _id: ObjectId("60bd94e2a0b1d01630da5b36"), "Windows.0.TC._id": req.params.id }, { $pull: { "Windows.0.TC": { _id: req.params.id } } }, { new: true }).then(function (Status) {
    res.send(Status);
  })
  // Services.deleteMany({}).then(function (Status) {
  //   res.send(Status);
  // }).catch(next);
});

module.exports = router;

