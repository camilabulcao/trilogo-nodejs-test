const express = require("express")
const msgCollections = require("../models/msgSchema")

const getBySala = (request, response) => {
    const idSala = request.params.idSala

    msgCollections.find({sala: idSala},(error, msg) =>{
            if (error) {
                return response.status(500).send(error)
            }else{
                if (salaId) {
                    return response.status(200).send(msg)
                } else {
                    return response.status(404).send("Mensagem não encontrada")
                }
            }
    })

}
module.exports =  {
    getBySala
}