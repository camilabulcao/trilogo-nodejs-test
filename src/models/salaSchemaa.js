const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const salaSchema = new Schema ({
    ticket_id: mongoose.Schema.Types.ObjectId, //tipo de dado dentro do mongoose que é id
    description: String,
    permalink: String,
    required: true
})
const salacollections = mongoose.model('Salas', salaSchema)

    module.exports = salacollections


