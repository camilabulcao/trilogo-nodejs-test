const express = require('express');
const router = express.Router();

const chatRoomController = require('../controllers/chatRoomController')


router.post('/createchatroom', chatRoomController.add)

router.get('/chatroombyuser', chatRoomController.filterBy)



//router.get('/paginada', chatRoomController.getMenusPage)

module.exports = router