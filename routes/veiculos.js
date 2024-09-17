const express = require('express');
const router = express.Router();
const veiculosController = require('../controllers/veiculosController');

router.post('/', veiculosController.create);
router.get('/', veiculosController.getAll);
router.get('/:id', veiculosController.getById);
router.put('/:id', veiculosController.update);
router.delete('/:id', veiculosController.delete);

module.exports = router;