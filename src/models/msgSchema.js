const { urlencoded } = require('body-parser')
const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const msgSchema = new Schema({
    autor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'participante',
        required: true
    },
    texto: {
        type: String, 
        required: true
    },
    sala: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'room',
        required: true
    },
    lido:{
        type: Boolean,
        default: false,
    }
})
const msgCollections = mongoose.model('message', msgSchema)

module.exports = msgCollections

