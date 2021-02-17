const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({ name: 'string' });

module.exports = userSchema