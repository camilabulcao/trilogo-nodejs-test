const express = require('express');
const router = express.Router();

const participanteController = require("../controllers/participanteController")

router.post('/add', participanteController.addParticipante)

router.get('/', participanteController.getAll)