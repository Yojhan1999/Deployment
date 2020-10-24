const router = require('express').Router()
const flutterController = require('../controllers/flutterController');

router.post('/api/login', flutterController.login);

module.exports = router;