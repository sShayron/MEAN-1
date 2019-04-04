var express = require('express');
var router = express.Router();
var Message = require('../models/message');

router.post('/', function(req, res) {
    var message = new Message({
        content: req.body.content
    });
    message.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                errorMessage: 'Erro ao gravar no banco de dados.',
                error: err
            });
        }

        res.status(201).json({
            successMessage: 'Mensagem criada com sucesso.',
            data: result
        });
    });
});

router.get('/', function(_, res) {
    Message.find()
        .exec(function(err, result) {
            if (err) {
                return res.status(500).json({
                    errorMessage: 'Erro ao recuperar.',
                    error: err
                });
            }

            res.status(200).json({
                successMessage: 'Mensagens recuperadas com sucesso.',
                data: result
            });
        });
});

router.delete('/:id', function(req, res) {
    Message.findById(req.params.id, function(err, result) {
        if (err) {
            return res.status(500).json({
                errorMessage: 'Erro ao localizar mensagem',
                error: err
            });
        }
        if (!result) {
            return res.status(404).json({
                errorMessage: 'Mensagem nao encontrada'
            });
        }

        result.remove(function(err, result) {
            if (err) {
                return res.status(500).json({
                    errorMessage: 'Erro ao deletar mensagem',
                    error: err
                });
            }
            res.status(200).json({
                successMessage: 'Mensagem deletada com sucesso',
                data: result
            });
        });
    });
})

module.exports = router;
