const express = require('express');
const router = express.Router();

const salaController = require('../controllers/salaController')

//router.get('/:idSala', controller.getBySala);

router.post('/createchatroom', salaController.addSala)

module.exports = router
