var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/create-user', function (req, res, next) {
    res.render('create-user');
});

router.post('/create-user', function (req, res, next) {
    const { emafirstName, lastName, password, email } = req.body;
    const userObject = new User({
        firstNam,
        lastName,
        password,
        email
    });

    userObject.save();

    res.redirect('/create-user');
});

module.exports = router;
