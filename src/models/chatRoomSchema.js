const mongoose = require("mongoose")
const Schema = mongoose.Schema
const userSchema = require("./userSchema")
const msgSchema = require("./msgSchema")

const chatRoomSchema = new Schema({
    "ticket_id": {
        type: String,
        required: true
    },
    "description": {
        type: String,
        required: true
    },
    "permalink": {
        type: String,
        required: true
    },
    "user_list": [userSchema],
    "messages": [msgSchema]
})
const ChatRoom = mongoose.model('chatroom', chatRoomSchema)


module.exports = ChatRoom

