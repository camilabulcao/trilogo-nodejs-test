const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const participanteSchema = new Schema ({
    _id: {
        type: mongoose.Schema.Types.ObjectId, //tipo de dado dentro do mongoose que é id
        auto: true, 
        required: true
    }, 
    nome: {
        type: String, 
        required:true
    }
})
const participanteCollections = mongoose.model('participante', participanteSchema)

module.exports = participanteCollections