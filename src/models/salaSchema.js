const mongoose = require ("mongoose")
const Schema = mongoose.Schema
const mongoosePaginate = require('mongoose-paginate')

const salaSchema = new Schema ({
    ticket_id: {
         type: mongoose.Schema.Types.ObjectId,//tipo de dado dentro do mongoose que é id
         auto: true, 
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
    identificacao_participanteId: {
        type: Schema.Types.ObjectId, 
        ref: 'participante',
        required: true
    }
})
const salaCollections = mongoose.model('sala', salaSchema)

salaSchema.plugin(mongoosePaginate)

    module.exports = salaCollections


