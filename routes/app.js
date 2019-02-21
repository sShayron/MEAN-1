var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    res.redirect('/create-user');
});

router.get('/get-user', function (req, res, next) {
    res.render('get-user');
});

router.post('/api/get-user', function (req, res, next) {
    const { email } = req.body;
    const user = User.find({ email });
    res.render('get-user', { user });
});

router.get('/create-user', function (req, res, next) {
    res.render('create-user');
});

router.post('/api/create-user', function (req, res, next) {
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
