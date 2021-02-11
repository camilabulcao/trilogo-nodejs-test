const express = require("express")
const app = express()
const cors = require("cors")
const db = require('./models/repository')


db.connect()
app.use(cors())
app.use(express.json())

const index = require("./routes/index")
const contatos = require("./routes/contatosRoute")

app.use("/sala", index)
app.use("/participante", contatos)

module.exports = app