const express = require("express")
const msgCollections = require("../models/msgSchema")

const getMsgBySala = (request, response) => {
    console.log("to aqui")
    const idSala = request.params.ticket_id
    console.log("entrei no get mensagem by sala")
    console.log(idSala)
    msgCollections.find({sala: idSala},(error, msg) =>{
            if (error) {
                return response.status(500).send(error)
            }else{
                if (idSala) {
                    return response.status(200).send(msg)
                } else {
                    return response.status(404).send("Mensagem não encontrada")
                }
            }
    })

}
const getAll = (request, response) => {
    console.log(request.url)
console.log("estou no get all msg")
    salaCollections.find((error, mensagem) =>{
        if(error){
            return response.status(500).send(error)
        }else{
            return response.status(200).json({
                mensagem: "Get com sucesso", mensagem
             })
        }
    })

}

module.exports =  {
    getMsgBySala, 
    getAll
}