const express = require('express');
const router = express.Router();

const chatRoomController = require('../controllers/chatRoomController')
const userController = require('../controllers/userController')
const msgController = require('../controllers/msgController')


router.post('/createchatroom', chatRoomController.add)

router.get('/chatroombyuser', chatRoomController.filterBy)

// rota de usuário
router.post('/adduser/:id', userController.add)

router.get('/chatusers/:ticket_id', userController.listByTicketId)

// rota de mensagens
router.get('/chatmessages/:ticket_id', msgController.listByTicketId)

router.post('/createchatmessage/:ticket_id', msgController.add)

module.exports = router