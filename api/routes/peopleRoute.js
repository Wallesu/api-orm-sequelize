const { Router } = require('express')
const PersonController = require('../controllers/PersonController')

const router = Router()

router.get('/people', PersonController.getAll)

router.get('/people/active', PersonController.getActive)

router.get('/people/:id', PersonController.getOne)

router.post('/people', PersonController.create)

router.put('/people/:id', PersonController.update)

router.delete('/people/:id', PersonController.delete)

router.post('/people/restore/:id', PersonController.restore)

// ----------------------------------- //

router.get('/people/:student_id/enrolments', PersonController.getAllEnrolments)

router.get(
    '/people/:student_id/enrolments/:enrolment_id',
    PersonController.getOneEnrolment
)

router.post('/people/:student_id/enrolments', PersonController.createEnrolment)

router.put(
    '/people/:student_id/enrolments/:enrolment_id',
    PersonController.updateEnrolment
)

router.delete(
    '/people/:student_id/enrolments/:enrolment_id',
    PersonController.deleteEnrolment
)

module.exports = router
