const router = require('express').Router()
const usuarioController = require('../controllers/usuarioController');

router.get('/user/:id', usuarioController.vistaUsuario);

module.exports = router;