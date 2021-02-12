const { response } = require("express")
const express = require("express")
const salaCollections = require("../models/salaSchema")

const getAll = (request, response) => {
    console.log(request.url)

    salaCollections.find((error, participante) =>{
        if(error){
            return response.status(500).send(error)
        }else{
            return response.status(200).json({
                mensagem: "Get com sucesso", participante
             })
        }
    })

}

const addSala = (request, response) => {
    const salaBody = request.body //pegando o body que o usuario digitou
    const sala = new salaCollections(salaBody) //criando um novo dado para o body

    sala.save((error, sala)=>{
        if (error) {
            return response.status(400).send(error)
        }else{
            return response.status(200).send({
                mensagem: "POST com sucesso",
                sala
            })
        }
    })
}

const getSalaId = (request, response) =>{
    const idParams = request.params.id
    salaCollections.findById(idParams,(error,salaId)=>{
        if (error) {
            return response.status(500).send(error)
        }else{
            if (salaId) {
                return response.status(200).send(salaId)
            } else {
                return response.status(404).send("Sala não encontrada")
            }
        }
    })
}

const getByDescricao = (request, response) =>{
    const descricaoParams = request.params.descricao
    salaCollections.findOne({descricao: descricaoParams}, (error,sala)=>{
        if (error) { 
            return response.status(500).send(error) 
        }else if (sala) {
            return response.status(200).send(sala) 
    } else {
       return response.status(400).json({ mensagem: 'Ops sala não encontrada! :/', })
       } 
    })

}

function getMenusPage (request, response) {
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
}

module.exports ={
    getAll,
    addSala,
    getSalaId,
    getByDescricao, 
    getMenusPage
}