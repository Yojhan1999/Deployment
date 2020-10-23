const router = require('express').Router()
const adminController = require('../controllers/adminController');

router.get('/admin', adminController.vistaAdmin);
router.get('/usuarios', adminController.usuarios);
router.get('/productos', adminController.productos);

router.get('/usuario/:id', adminController.eliminarUsuario);
router.post('/usuario/:id', adminController.actualizarUsuario);
router.post('/usuario', adminController.registrarAdmin);

router.get('/producto/:id', adminController.eliminarProducto);
router.post('/producto/:id', adminController.actualizarUsuario);

module.exports = router;