const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const participanteSchema = new Schema ({
    
    username: {
        type: String, 
        required:true
    },
    /*listaSala: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'room'
        }]
    }
    /*sala: {
        type: String,
        ref: 'room'
    }*/
})
const participanteCollections = mongoose.model('participante', participanteSchema)

module.exports = participanteCollections