const express =  require ('express')
const path = require('path') //padrão do node
const router = require('./src/routes/Routes')
const bodyParser = require('body-parser')
const database = require('./dbConnection')

database.connect();

const app = express()
const server = require('http').createServer(app) //definido o protocolo http
const io = require('socket.io')(server)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use('/api', router);

app.use('/', (request, response) =>{
     response.render('index.html')
})

let messages = []; //array para armazenagem sem a conexão com o MongoDb

//let messages = msgCollections
//let chatTrilogo = null

io.on('connection', socket =>{
    console.log(`Socket conectado: ${socket.id}`)
    
    socket.emit('previousMessages', messages)


    socket.on('sendMessage', data =>{
       /* messages.push(data)
        chatTrilogo = new salaCollections(data)
        chatTrilogo.save()*/
     //   messages.push(data)
        // salaCollections.find({ticket_id: data.ticket_id}, (error, sala) => {	
        //     if(error) {
        //         response.status(500).send(error)
        //     } else if (sala) {
        //         const msgObject = {
        //             autor: data.username,
        //             texto: data.message,
        //             sala: sala._id
        //         }
        //         const novaMsg = new msgCollections(msgObject);
        //         novaMsg.save()

        //         const listaMensagens = sala.listaMsg
        //         listaMensagens.forEach(async mensagem => {
        //            await msgCollections.findById(mensagem, (error, msg) => {
        //                 const msgFront = {
        //                     message: msg.texto,
        //                     username: msg.autor
        //                 }
                        
        //                 messages.push(msgFront)
        //             })
        //         })

        //         socket.broadcast.emit('receivedMessage', novaMsg)
        //    }
        // })
console.log(data)
    
       
        //find pra pegar o id da sala a partir do data.sala (que se refere ao ticket_id)
        //find pra pegar o id de participante a partir do username
        // depois que pegar esses dois Ids, cria um novo objeto passando os valores certos
        const msg = new msgCollections(data);
        msg.save()

        var novaMsg ={
            autor: data.autor,
            texto: data.texto
        };
        
        socket.broadcast.emit('receivedMessage', novaMsg)
    })

})


server.listen(3000)

        
        /*salaCollections.find({ticket_id: data.ticket_id}, (error, sala) => {	
            if(error) {
                response.status(500).send(error)
            } else if (sala) {
                const msgObject = {
                    autor: data.username,
                    texto: data.message,
                    sala: sala._id
                }
                const novaMsg = new msgCollection(msgObject);
                novaMsg.save()*/
                
           /* }
        })
        */

        module.exports = io