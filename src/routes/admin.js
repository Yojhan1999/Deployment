const router = require('express').Router()
const adminController = require('../controllers/adminController');

router.get('/admin', adminController.vistaAdmin);
router.get('/usuarios', adminController.usuarios);
router.get('/productos', adminController.productos);

router.delete('/usuario/:id', authController.eliminarUsuario);

module.exports = router;