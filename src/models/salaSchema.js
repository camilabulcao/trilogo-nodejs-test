const mongoose = require ("mongoose")
const Schema = mongoose.Schema
//const mongoosePaginate = require('mongoose-paginate')

const salaSchema = new Schema ({
    ticket_id: {
         type: mongoose.Schema.Types.ObjectId,//tipo de dado dentro do mongoose que é id
         auto: true, 
         required: true
    },
    username: {
        type:String,
        required: false
    
    },  
    message: {
        type:String,
        required: false
    
    },  
    permalink:{
        type:String,
        required: false
        
    },
    /*identificacao_participanteId: {
        type: Schema.Types.ObjectId, 
        ref: 'participante',
        required: true
    }*/
})
const salaCollections = mongoose.model('salaCollections', salaSchema)

//salaSchema.plugin(mongoosePaginate)

    module.exports = salaCollections


