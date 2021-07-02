var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;
var Services = require('../models/services');
var ObjectId = require('mongodb').ObjectId;
var servicelist = require('../client/src/services-list.json');
var cmd = require('node-cmd');

cmd.run(`net use \\\\${servicelist.windows.set1.tc.creds.ip} ${servicelist.windows.set1.tc.creds.password} /user:${servicelist.windows.set1.tc.creds.username}`, function (err, data, stderr) {
  console.log('Result : ', data);
});

/* GET home page. */
router.get('/set1', function (req, res, next) {
  Services.findOne({ _id: ObjectId("60de9882b9e6d141b43d8c47") }).then(function (Status) {
    res.send(Status);
  }).catch(next);
});

router.get('/set2', function (req, res, next) {
  Services.findOne({ _id: ObjectId("60bdc443f7330d0fe42ad476") }).then(function (Status) {
    res.send(Status);
  }).catch(next);
});

router.post('/set1/create', function (req, res, next) {
  Services.create({ $push: { 'Windows': req.body } }).then(function (Status) {
    res.send(Status);
  }).catch(next);
});

router.post('/set2/create', function (req, res, next) {
  Services.create({ $push: { 'Windows': req.body } }).then(function (Status) {
    res.send(Status);
  }).catch(next);
});

router.patch('/set1/update', function (req, res, next) {
  Services.findOneAndUpdate({ _id: ObjectId("60de9882b9e6d141b43d8c47") }, { $pull: { "Windows.0.TC": req.body } }, { new: true }).then(function () {
    for (var key in servicelist.windows.set1.tc) {

      if (servicelist.windows.set1.tc.hasOwnProperty(key) && key != 'creds') {
        exec(`sc \\\\${servicelist.windows.set1.tc.creds.ip} query ${key}`, (error, results) => {
          if (error) {
            res.status(400).send(error);
          }

          req.body = results.split(/\r?\n/).reduce(function (jsonres, status) {
            var s = status.split(':');
            jsonres[s.shift().trim()] = s.join(':').trim();
            return jsonres;
          }, {});

          Services.updateOne({ _id: ObjectId("60de9882b9e6d141b43d8c47") }, { $addToSet: { "Windows.0.TC": req.body } }, { new: true }).then(function (Status) {
            res.send(Status);
          }).catch(next);

        })
      }
    }


  }).catch(next);

});

router.patch('/set2/update', function (req, res, next) {
  Services.findOneAndUpdate({ _id: ObjectId("60bdc443f7330d0fe42ad476") }, { $pull: { "Windows.0.TC": req.body } }, { new: true }).then(function () {
    for (var key in servicelist.windows.set2.tc) {

      if (servicelist.windows.set2.tc.hasOwnProperty(key) && key != 'creds') {
        exec(`sc \\\\${servicelist.windows.set2.tc.creds.ip} query ${servicelist.windows.set1.tc[key]}`, (error, results) => {
          if (error) {
            res.status(400).send(error);
          }

          var obj = results.split(/\r?\n/).reduce(function (jsonres, status) {
            var s = status.split(':');
            jsonres[s.shift().trim()] = s.join(':').trim();
            return jsonres;
          }, {});

          req.body = JSON.parse(JSON.stringify(obj));

          Services.updateOne({ _id: ObjectId("60bdc443f7330d0fe42ad476") }, { $addToSet: { "Windows.0.TC": req.body } }, { new: true }).then(function (Status) {
            res.send(Status);
          }).catch(next);
        })
      }
    }
  }).catch(next);

});

router.patch('/set1/start/:key', function (req, res, next) {
  exec(`sc \\\\${servicelist.windows.set1.tc.creds.ip} start ${servicelist.windows.set1.tc[req.params.key]}`, (error, results) => {
    if (error) {
      res.status(400).send(error);
    }

    req.body = results.split(/\r?\n/).reduce(function (jsonres, status) {
      var s = status.split(':');
      jsonres[s.shift().trim()] = s.join(':').trim();
      return jsonres;
    }, {});

    Services.updateOne({ _id: ObjectId("60de9882b9e6d141b43d8c47"), "Windows.0.TC.SERVICE_NAME": servicelist.windows.set1.tc[req.params.key] }, { $set: { "Windows.0.TC.$": req.body } }, { new: true }).then(function (Status) {
      res.send(Status);
    }).catch(next);
  })
});

router.patch('/set2/start/:id', function (req, res, next) {
  var key = 'Teamcenter Action Manager Service';
  exec(`sc \\\\${servicelist.windows.set2.tc.creds.ip} start ${servicelist.windows.set1.tc[key]}`, (error, results) => {
    if (error) {
      res.status(400).send(error);
    }

    var obj = results.split(/\r?\n/).reduce(function (jsonres, status) {
      var s = status.split(':');
      jsonres[s.shift().trim()] = s.join(':').trim();
      return jsonres;
    }, {});

    req.body = JSON.parse(JSON.stringify(obj));

    Services.updateOne({ _id: ObjectId("60bdc443f7330d0fe42ad476"), "Windows.0.TC._id": req.params.id }, { $set: { "Windows.0.TC.$": req.body } }, { new: true }).then(function (Status) {
      res.send(Status);
    }).catch(next);
  })
});

router.patch('/set1/stop/:key', function (req, res, next) {
  exec(`sc \\\\${servicelist.windows.set1.tc.creds.ip} stop ${servicelist.windows.set1.tc[req.params.key]}`, (error, results) => {
    if (error) {
      res.status(400).send(error);
    }

    var obj = results.split(/\r?\n/).reduce(function (jsonres, status) {
      var s = status.split(':');
      jsonres[s.shift().trim()] = s.join(':').trim();
      return jsonres;
    }, {});

    req.body = JSON.parse(JSON.stringify(obj));

    Services.updateOne({ _id: ObjectId("60de9882b9e6d141b43d8c47"), "Windows.0.TC.SERVICE_NAME": servicelist.windows.set1.tc[req.params.key] }, { $set: { "Windows.0.TC.$": req.body } }, { new: true }).then(function (Status) {
      res.send(Status);
    }).catch(next);
  })
});

router.patch('/set2/stop/:id', function (req, res, next) {
  var key = 'Teamcenter Action Manager Service';
  exec(`sc \\\\${servicelist.windows.set1.tc.creds.ip} stop ${key}`, (error, results) => {
    if (error) {
      res.status(400).send(error);
    }

    var obj = results.split(/\r?\n/).reduce(function (jsonres, status) {
      var s = status.split(':');
      jsonres[s.shift().trim()] = s.join(':').trim();
      return jsonres;
    }, {});

    req.body = JSON.parse(JSON.stringify(obj));

    Services.updateOne({ _id: ObjectId("60bdc443f7330d0fe42ad476"), "Windows.0.TC._id": req.params.id }, { $set: { "Windows.0.TC.$": req.body } }, { new: true }).then(function (Status) {
      res.send(Status);
    }).catch(next);
  })
});


router.delete('/set1/delete/:id', function (req, res, next) {
  Services.updateOne({ _id: ObjectId("60de9882b9e6d141b43d8c47"), "Windows.0.TC._id": req.params.id }, { $pull: { "Windows.0.TC": { _id: req.params.id } } }, { new: true }).then(function (Status) {
    res.send(Status);
  }).catch(next);
  // Services.deleteMany({}).then(function (Status) {
  //   res.send(Status);
  // }).catch(next);
});

router.delete('/set2/delete/:id', function (req, res, next) {
  Services.updateOne({ _id: ObjectId("60bdc443f7330d0fe42ad476"), "Windows.0.TC._id": req.params.id }, { $pull: { "Windows.0.TC": { _id: req.params.id } } }, { new: true }).then(function (Status) {
    res.send(Status);
  }).catch(next);
  // Services.deleteMany({}).then(function (Status) {
  //   res.send(Status);
  // }).catch(next);
});
module.exports = router;


