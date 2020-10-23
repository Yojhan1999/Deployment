const router = require('express').Router()
const adminController = require('../controllers/adminController');

router.get('/admin', adminController.vistaAdmin);
router.get('/usuarios', adminController.usuarios);
router.get('/productos', adminController.productos);

router.get('/usuario/:id', adminController.eliminarUsuario);
router.post('/usuario/:id', adminController.actualizarUsuario);

module.exports = router;