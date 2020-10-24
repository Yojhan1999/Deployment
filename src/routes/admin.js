const router = require('express').Router()
const adminController = require('../controllers/adminController');

router.get('/admin/:id', adminController.vistaAdmin);
router.get('/usuarios', adminController.usuarios);
router.get('/productos', adminController.productos);

router.get('/usuario/:id', adminController.eliminarUsuario);
router.post('/usuario/:id', adminController.actualizarUsuario);
router.post('/usuario', adminController.registrarAdmin);

router.get('/producto/:id', adminController.eliminarProducto);
router.post('/producto/:id', adminController.actualizarProducto);
router.post('/producto', adminController.registrarProducto);

router.get('/pedidos', adminController.pedidoAdmin);
router.get('/pedido/:id',adminController.eliminarPedido);


module.exports = router;