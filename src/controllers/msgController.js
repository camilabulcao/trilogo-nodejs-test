const ChatRoom = require("../models/chatRoomSchema")

const listByTicketId = async (request, response) => {
    const { ticket_id } = request.params;

    if (!ticket_id){
        response.status(400).send({message: 'ticked_id is required'})
        return
    }
    const chatRoom = await ChatRoom.find({ticket_id});
    if(chatRoom.length === 0){
        response.status(400).send({message: 'Chat room not found'})
        return
    }
    const result = chatRoom[0].messages
  
    if(result.length === 0){
      response.status(200).send({message: 'No messages in this chat room'})
    } else{
      response.status(200).send(result)
      return result
    }
}

const add = async (request, response) => {
    const { ticket_id } = request.params;
    const msg = request.body

    if (!ticket_id){
        response.status(400).send({message: 'ticked_id is required'})
        return
    }

    const chatRoom = await ChatRoom.find({ticket_id});
    if(chatRoom.length === 0){
        response.status(400).send({message: 'Chat room not found'})
        return
    }
    
    try{
      chatRoom[0].messages.push(msg)
    
     await chatRoom[0].save()
        response.status(200).send({message: 'Message added'})
     }catch(error){
         return console.error({message: " failed"})

     }
    
}


module.exports =  {
    listByTicketId,add
}