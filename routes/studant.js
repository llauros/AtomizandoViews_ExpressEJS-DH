const express = require('express');
const router = express.Router();
const studantController = require('../controllers/studantController');

router.get('/', studantController.index);

module.exports = router;