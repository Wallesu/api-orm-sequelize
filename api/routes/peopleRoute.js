const { Router } = require('express')
const PersonController = require('../controllers/PersonController')

const router = Router()

router.get('/people', PersonController.getAll)

router.get('/people/:id', PersonController.getOne)

router.post('/people', PersonController.create)

router.put('/people/:id', PersonController.update)

router.delete('/people/:id', PersonController.delete)

module.exports = router
