

const express = require('express');
const router = express.Router();
const acessoriosController = require('../controllers/acessorios.Controller');


router.post('/', acessoriosController.create);


router.get('/', acessoriosController.getAll);


router.get('/:id', acessoriosController.getById);


router.put('/:id', acessoriosController.update);


router.delete('/:id', acessoriosController.delete);

module.exports = router;