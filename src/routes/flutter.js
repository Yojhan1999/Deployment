const router = require('express').Router()
const flutterController = require('../controllers/flutterController');

router.post('/api/login', flutterController.login);
router.get('/api/producto', flutterController.listarProductos);
router.post('/api/pedido/:producto/:usuario', flutterController.realizarPedido);

module.exports = router;