const mongoose = require ("mongoose")
const Schema = mongoose.Schema

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
    } 
})
const salacollections = mongoose.model('sala', salaSchema)

    module.exports = salacollections


