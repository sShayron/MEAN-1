const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('./config');
const User = require('../models/user');

router.post('/', (req, res) => {
  const newUser = new User({
    firstName: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    genre: req.body.genre,
    password: bcrypt.hashSync(req.body.password)
  });

  newUser.save(function (err, result) {
    if (err) {
      res.status(500).json({
        errorMessage: 'Erro ao gravar usuario no banco de dados.',
        error: err
      });
    }

    const expiresIn = 24 * 60 * 60;
    const accessToken = jwt.sign({
      id: result._id
    }, config.secret, {
      expiresIn: expiresIn
    });

    res.status(201).json({
      successMessage: 'Usuario criado com sucesso.',
      data: result,
      accessToken
    });
  });
});

module.exports = router;