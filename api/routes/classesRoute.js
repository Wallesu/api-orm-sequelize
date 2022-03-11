const { Router } = require('express')
const ClassController = require('../controllers/ClassController')

const router = Router()

router.get('/classes', ClassController.getAll)

router.get('/classes/:id', ClassController.getOne)

router.post('/classes', ClassController.create)

router.put('/classes/:id', ClassController.update)

router.delete('/classes/:id', ClassController.delete)

module.exports = router
