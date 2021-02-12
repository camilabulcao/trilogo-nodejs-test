const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const msgSchema = new Schema({
    remetente:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'participante',
        required: true
    },
    mensagem: {
        type: String, 
        required: true
    },
    sala: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'sala',
        required: true
    }
})
const msgCollections = mongoose.model('msg', msgSchema)

module.exports = msgCollections

