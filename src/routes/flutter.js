const router = require('express').Router()
const flutterController = require('../controllers/flutterController');

router.post('/api/login', flutterController.login);
router.get('/api/producto', flutterController.listarProductos)

module.exports = router;