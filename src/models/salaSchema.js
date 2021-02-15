const mongoose = require ("mongoose")
const Schema = mongoose.Schema
//const mongoosePaginate = require('mongoose-paginate')

const salaSchema = new Schema ({
    ticket_id: {
         type: String,
         required: true
    },
    description: {
        type:String,
        required: true
    
    },  
    permalink:{
        type:String,
        required: true
        
    },
    listaMsg: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'message'
        }]
    },
    listaParticipante:{
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'participante'
        }]
    }
    
})
const salaCollections = mongoose.model('room', salaSchema)

//salaSchema.plugin(mongoosePaginate)

    module.exports = salaCollections

