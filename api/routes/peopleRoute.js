const { Router } = require('express')
const PersonController = require('../controllers/PersonController')

const router = Router()

router.get('/people', PersonController.getAll)

router.get('/people/:id', PersonController.getOne)

router.post('/people', PersonController.create)

module.exports = router
