const express = require('express');
const router = express.Router();

const msgController = require('../controllers/msgController')

router.get('/chatmessages/{ticketId}', msgController.getMsgBySala)

module.exports = router