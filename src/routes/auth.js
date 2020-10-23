const router = require('express').Router()
const authController = require('../controllers/authController');

router.get('/', authController.index);
router.get('/registro', authController.formRegistro);

router.post('/registro', authController.registrarUsuario);
router.post('/ingresar', authController.ingresarUsuario);

module.exports = router;