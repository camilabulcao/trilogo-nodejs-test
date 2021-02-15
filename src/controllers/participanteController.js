const { response } = require("express")
const express = require("express")
const participanteCollections = require("../models/participanteSchema")

const getAll = (request, response) => {
    console.log(request.url)
    console.log("estou aqui")
    participanteCollections.find((error, participante) => {
        if (error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).send({
                mensagem: "GET com sucesso",
                participante
            })
        }
    })
}
const addParticipante = (request, response) => {
    const participanteBody = request.body //pegando o body que o usuario digitou
    const participante = new participanteCollections(participanteBody) //criando um novo dado para o body

    participante.save((error) => {
        if (error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).send({
                msg: "Participante já cadastrado com sucesso"
            })
        }
    })
}

/* participante.save((error, participante) => {
     if (error) {
             return response.status(400).send(error)
     } else {
         return response.status(200).send({
                 mensagem: "POST com sucesso",
                 participante
             })
         }
     })
}*/

module.exports = {
    getAll,
    addParticipante
}