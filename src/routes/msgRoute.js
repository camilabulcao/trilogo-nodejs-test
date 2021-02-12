const express = require('express');
const router = express.Router();

const controller = require('../controllers/msgController');

router.get('/:idSala', controller.getBySala);


module.exports = router