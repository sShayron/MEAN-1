var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/get-user', function (req, res, next) {
    res.render('get-user');
});

router.post('/get-user', function (req, res, next) {
    const { email } = req.body;
    User.findOne({ email }, function (err, docs) {
        if (err) {
            return;
        }
        res.render('get-user', { user: docs });
    });
});

router.get('/create-user', function (req, res, next) {
    res.render('create-user');
});

router.post('/create-user', function (req, res, next) {
    const { firstName, lastName, password, email } = req.body;
    const userObject = new User({
        firstName,
        lastName,
        password,
        email
    });

    userObject.save();

    res.redirect('/create-user');
});

module.exports = router;
