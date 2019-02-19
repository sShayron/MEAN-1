var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/node-mongodb-mongoose-user', function (req, res, next) {
    res.render('node');
});

router.post('/node-mongodb-mongoose-user', function (req, res, next) {
    var emailVar = req.body.emailBody;
    var userObject = new User({
        firstName: 'Shayron',
        lastName: 'Aguair',
        password: 's3cr37',
        email: emailVar
    });

    userObject.save();

    res.redirect('/node-mongodb-mongoose-user');
});

module.exports = router;
