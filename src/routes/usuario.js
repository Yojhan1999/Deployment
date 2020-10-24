const router = require('express').Router()
const usuarioController = require('../controllers/usuarioController');

router.get('/user/:id', usuarioController.vistaUsuario);
router.get('/pedido/:producto/:usuario')

module.exports = router;