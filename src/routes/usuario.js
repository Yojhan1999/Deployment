const router = require('express').Router()
const usuarioController = require('../controllers/usuarioController');

router.get('/usuario', usuarioController.vistaUsuario);

module.exports = router;