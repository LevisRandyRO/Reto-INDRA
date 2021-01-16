const express = require('express');
const router = express.Router();

const planetaController = require('../controllers/planetaContoller')

router.get('/listar', planetaController.all)
router.post('/crear', planetaController.create)

module.exports = router