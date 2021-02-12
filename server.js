const express =  require ('express')
const path = require('path') //padrão do node
const route = require('./src/routes/salaRoute')
const bodyParser = require('body-parser')
const database = require('./dbConnection')
const salaCollections = require('./src/models/salaSchema')

database.connect();


//websocket é um novo protocolo
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
const server = require('http').createServer(app) //definido o protocolo http
const io = require('socket.io')(server)

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')


app.use('/api', route);

app.use('/', (request, response) =>{
     response.render('index.html')
})

let messages = []; //array para armazenagem sem a conexão com o MongoDb

//let chatTrilogo = null

io.on('connection', socket =>{
    console.log(`Socket conectado: ${socket.id}`)

    socket.emit('previousMessages', messages)


    socket.on('sendMessage', data =>{
        messages.push(data)
        //chatTrilogo = new salaCollections(data)
        //chatTrilogo.save()
        socket.broadcast.emit('receivedMessage', data)
    })

})


server.listen(3000)