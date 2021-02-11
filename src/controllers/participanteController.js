const { response } = require("express")
const express = require("express")
const participanteCollections = require("../models/participanteSchema")

const getAll = (request, response) =>{
    console.log(request.url)

    contatoCollections.find((error, participante) => {
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

module.exports ={
    getAll
}