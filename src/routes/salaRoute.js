const express = require('express');
const router = express.Router();

const salaController = require('../controllers/salaController')

router.get('/salas', salaController.getAll);

router.post('/createchatroom', salaController.addSala)

router.get('/salabyid/:id', salaController.getSalaId)

router.get('/saladescricao/:description', salaController.getByDescricao)

router.get('/sala/:ticket_id', salaController.getByTicket)

//router.get('/paginada', salaController.getMenusPage)

module.exports = router