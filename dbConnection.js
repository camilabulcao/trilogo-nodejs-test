const mongoose = require('mongoose');

const DB_URI = "mongodb://localhost:27017/chatTrilogo";

const connect = () => {
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });
    const connection = mongoose.connection;
    connection.on('error', () => console.log('Error to connect with mongodb'));
    connection.once('open', () => console.log('We are connect with mongodb'));
}

module.exports = {connect}