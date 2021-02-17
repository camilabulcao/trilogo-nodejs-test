const mongoose = require("mongoose")
const Schema = mongoose.Schema

const msgSchema = new Schema({
    "author": String,
    "creted_at": { type: Date, default: Date.now },
    "content": String,
    "isRead": { type: Boolean, default: false }
})

module.exports = msgSchema

