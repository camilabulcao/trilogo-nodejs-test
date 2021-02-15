const mongoose = require ("mongoose")
const Schema = mongoose.Schema
//const mongoosePaginate = require('mongoose-paginate')

const chatRoomSchema = new Schema ({
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
    userList:{
        type: [{
            type: Schema.Types.String,
            ref: 'chatUser'
        }]
    }
    
})
const chatRoomCollections = mongoose.model('room', chatRoomSchema)

//salaSchema.plugin(mongoosePaginate)

    module.exports = chatRoomCollections

//db.rooms.insert([{"ticket_id": "123", "description": "lâmpada queimada", "permalink": "www.trilogo.com", "listaParticipante": [ObjectId("602ac8da6b5a66ab704f1db5"), ObjectId("602ac8da6b5a66ab704f1db6")]})