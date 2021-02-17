const ChatRoom = require('../models/chatRoomSchema')

const add = async (request, response) => {
    const {id} = request.params
    const {name} = request.body
    console.log(name)
    
    if(!name) {
        response.status(400).send({message: 'name is required'})
        return
    }try{
      const chatRoom = await ChatRoom.findById(id);
      console.log(chatRoom)
      chatRoom.user_list.push({name})
    
     await chatRoom.save()
        response.status(200).send({message: 'user added'})
     }catch(error){
         return console.error({message: " failed"})

     }
    
}

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
    const result = chatRoom[0].user_list
  
    if(result.length === 0){
      response.status(200).send({message: 'No users in this chat room'})
    } else{
      response.status(200).send(result)
      return result
    }
}


module.exports = { add,listByTicketId }