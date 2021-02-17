const ChatRoom = require("../models/chatRoomSchema")
const io = require('../../server')


const add = async (request, response) => {
    const { Description, TicketId, permalink } = request.body

    if (!TicketId) {
        return response.status(400).send({ message: "TicketId is required" })
    }
    const chatDTO = {
        "ticket_id": TicketId,
        "description": Description,
        "permalink": permalink
    }
    try {
        const chatRoom = new ChatRoom(chatDTO)

        const savedChatRoom = await chatRoom.save()

        response.status(201).send(savedChatRoom)

        io.emit('chatRoom', savedChatRoom);
           
    } catch (error) {
        response.status(500).send(error)
        return console.error('error',error)

    }
}
    
    
const filterBy = async (request, response) => {
    const {userId, limit, term } = request.query

    let query = null

    if (!userId){
        response.status(400).send({message: 'userId is required as param'})
    return
    } else {
        query = {'user_list._id': userId}

    } if(term) {
        query.description =  new RegExp(term, 'i')
    }

      const result = await ChatRoom.find(query).
      limit(parseInt(limit)||5)
    
      if(result.length === 0){
        response.status(200).send({message: 'No chatroom was finded for this userId'})
      } else{
        response.status(200).send(result)
      }
    
}

module.exports = {
    add,
    filterBy
}