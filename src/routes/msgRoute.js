const express = require('express');
const router = express.Router();

const msgController = require('../controllers/msgController')

router.get('/chatmessages/:ticket_id', msgController.getMsgBySala)

router.get('/msg', msgController.getAll)

module.exports = router