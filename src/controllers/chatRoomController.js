const { response } = require("express")
const express = require("express")
const chatRoomCollections = require("../models/chatRoomSchema")


const add = (request, response) => {
    const body = request.body //pegando o body que o usuario digitou
    const room = new chatRoomCollections(body) //criando um novo dado para o body

    room.save((error, room)=>{
        if (error) {
            return response.status(400).send(error)
        }else{
            return response.status(201).send({
                message: "Created room",
                room
            })
        }
    })
    if(!body.ticket_id){
        return response.status(400).send({ message: "TicketId is required"})
    }
}

const filterBy = async (request, response) =>{
    const params = request.query
    console.log(params)
    let query = {}
    if('userId' in params && params.userId){
        query['userList._id'] = params.userId
    }else{
       response.status(400).send({message: "UserId is required"})
    }
    if('term' in params){
        query.description = "/"+params.term+"/i"
        console.log(query.description)
    } 
   const result = await chatRoomCollections.find(query).exec();
    console.log("result", result)
   response.status(200).send(result)

}


/*function getMenusPage (request, response) {
    Menus
    .find({ }, { page: 3, limit: 5 }, function(err, menu)  {
        if(err){
            res.status(500).send({
                message: 'Error na solicitação'
            });
        }else{
            if(!menu){
                res.status(404).send({
                    message: 'Não existe nenhum menu nesse registro'
                });
            }else{
                res.status(200).send({
                    menu
                });
            }
        }
    })
}*/

module.exports ={
    add,
    filterBy
    //getMenusPage
}