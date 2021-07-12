var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;
var Services = require('../models/services');
var ObjectId = require('mongodb').ObjectId;
var servicelist = require('../client/src/services-list.json');
var cmd = require('node-cmd');

var set1ID = ObjectId("60ec06d4e42e985148a91aec");
var set2ID = ObjectId("60ec069eb8c3660dc8b63630");
var objID, setNumber;

cmd.run(`net use \\\\${servicelist.windows.set1.db.creds.ip} ${servicelist.windows.set1.db.creds.password} /user:${servicelist.windows.set1.db.creds.username}`, function (err, data, stderr) {
    console.log('Result : ', data);
});

cmd.run(`net use \\\\${servicelist.windows.set2.db.creds.ip} ${servicelist.windows.set2.db.creds.password} /user:${servicelist.windows.set2.db.creds.username}`, function (err, data, stderr) {
    console.log('Result : ', data);
});

function checkSetNumber(id) {
    if (id === '1') {
        objID = set1ID;
        setNumber = servicelist.windows.set1;
    }
    else {
        objID = set2ID;
        setNumber = servicelist.windows.set2;
    }
}

router.get('/get/set/:id', function (req, res, next) {

    checkSetNumber(req.params.id);

    Services.find({ _id: objID }).then(function (Status) {
        res.send(Status);
    }).catch(next);
});

router.post('/create/set/:id', function (req, res, next) {
    Services.create({ $push: { 'Windows': req.body } }).then(function (Status) {
        res.send(Status);
    }).catch(next);
});

router.post('/add/set/:id', function (req, res, next) {

    checkSetNumber(req.params.id);

    Services.findOneAndUpdate({ _id: objID }, { $pull: { "Windows.0.DB": req.body } }, { new: true }).then(function () {
        for (var key in setNumber.db) {

            if (setNumber.db.hasOwnProperty(key) && key != 'creds') {
                exec(`sc \\\\${setNumber.db.creds.ip} query ${setNumber.db[key]}`, (error, results) => {
                    if (error) {
                        res.status(400).send(error);
                    }

                    req.body = results.split(/\r?\n/).reduce(function (jsonres, status) {
                        var s = status.split(':');
                        jsonres[s.shift().trim()] = s.join(':').trim();
                        return jsonres;
                    }, {});

                    Services.updateOne({ _id: objID }, { $addToSet: { "Windows.0.DB": req.body } }, { new: true }).then(function (Status) {
                        if (res.statusCode === 400) {
                            res.send(Status);
                        }
                        res.send(Status);
                    }).catch(next);
                })
            }
        }
        //res.status(201).send();
    }).catch(next);
});

router.patch('/update/set/:id/:key', function (req, res, next) {

    checkSetNumber(req.params.id);

    if (setNumber.db.hasOwnProperty(req.params.key) && req.params.key != 'creds') {
        exec(`sc \\\\${setNumber.db.creds.ip} query ${setNumber.db[req.params.key]}`, (error, results) => {
            if (error) {
                res.status(400).send(error);
            }

            req.body = results.split(/\r?\n/).reduce(function (jsonres, status) {
                var s = status.split(':');
                jsonres[s.shift().trim()] = s.join(':').trim();
                return jsonres;
            }, {});


            Services.updateOne({ _id: objID, "Windows.0.DB.SERVICE_NAME": setNumber.db[req.params.key].replace(/['"]+/g, '') }, { $set: { "Windows.0.DB.$": req.body } }, { new: true }).then(function (Status) {
                res.send(Status);
            }).catch(next);

        })
    }
});

router.patch('/start/set/:id/:key', function (req, res, next) {

    checkSetNumber(req.params.id);

    exec(`sc \\\\${setNumber.db.creds.ip} start ${setNumber.db[req.params.key]}`, (error, results) => {
        if (error) {
            res.status(400).send(error);
        }

        req.body = results.split(/\r?\n/).reduce(function (jsonres, status) {
            var s = status.split(':');
            jsonres[s.shift().trim()] = s.join(':').trim();
            return jsonres;
        }, {});

        Services.updateOne({ _id: objID, "Windows.0.DB.SERVICE_NAME": setNumber.db[req.params.key].replace(/['"]+/g, '') }, { $set: { "Windows.0.DB.$": req.body } }, { new: true }).then(function (Status) {
            res.send(Status);
        }).catch(next);
    })
});

router.patch('/stop/set/:id/:key', function (req, res, next) {

    checkSetNumber(req.params.id);

    exec(`sc \\\\${setNumber.db.creds.ip} stop ${setNumber.db[req.params.key]}`, (error, results) => {
        if (error) {
            res.status(400).send(error);
        }

        req.body = results.split(/\r?\n/).reduce(function (jsonres, status) {
            var s = status.split(':');
            jsonres[s.shift().trim()] = s.join(':').trim();
            return jsonres;
        }, {});

        Services.updateOne({ _id: objID, "Windows.0.DB.SERVICE_NAME": setNumber.db[req.params.key].replace(/['"]+/g, '') }, { $set: { "Windows.0.DB.$": req.body } }, { new: true }).then(function (Status) {
            res.send(Status);
        }).catch(next);
    })
});

router.delete('/delete/set/:id/:key', function (req, res, next) {

    // checkSetNumber(req.params.id);

    // Services.updateOne({ _id: objID, "Windows.0.DB.SERVICE_NAME": setNumber.db[req.params.key].replace(/['"]+/g, '') }, { $pull: { "Windows.0.DB": { SERVICE_NAME: setNumber.db[req.params.key].replace(/['"]+/g, '') } } }, { new: true }).then(function (Status) {
    //     res.send(Status);
    // }).catch(next);
    Services.deleteMany({}).then(function (Status) {
        res.send(Status);
    }).catch(next);
});

module.exports = router;


