const express =  require ('express')
const path = require('path') //padrão do node

//websocket é um novo protocolo
const app = express()
const server = require('http').createServer(app) //definido o protocolo http
const io = require('socket.io')(server)

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use('/', (request, response) =>{
     response.render('index.html')
})

let messages = []; //array para armazenagem sem a conexão com o MongoDb


io.on('connection', socket =>{
    console.log(`Socket conectado: ${socket.id}`)

    socket.emit('previousMessages', messages)


    socket.on('sendMessage', data =>{
        messages.push(data)
        socket.broadcast.emit('receivedMessage', data)
    })

})
server.listen(3000)