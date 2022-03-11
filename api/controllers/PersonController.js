const db = require('../models')

//static serve para usar o método sem a instância da classe
class PersonController {
    static async getAll(req, res) {
        try {
            const people = await db.People.scope('all').findAll()
            return res.status(200).json(people)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    static async getActive(req, res) {
        try {
            const people = await db.People.findAll()
            return res.status(200).json(people)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    static async getOne(req, res) {
        const { id } = req.params
        try {
            const person = await db.People.findOne({
                where: {
                    id: Number(id),
                },
            })

            return res.status(200).json(person)
        } catch (error) {
            return res.status(404).json({ message: error.message })
        }
    }

    static async create(req, res) {
        const newPerson = req.body
        try {
            const result = await db.People.create(newPerson)
            return res.status(201).json(result)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    static async update(req, res) {
        const { id } = req.params
        const dataToUpdate = req.body
        try {
            await db.People.update(dataToUpdate, {
                where: {
                    id: Number(id),
                },
            })

            const updatedPerson = await db.People.findOne({
                where: {
                    id: Number(id),
                },
            })

            return res.status(200).json(updatedPerson)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    static async delete(req, res) {
        const { id } = req.params
        try {
            await db.People.destroy({
                where: {
                    id: Number(id),
                },
            })

            res.status(200).json({ message: `id ${id} deletado.` })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    static async restore(req, res) {
        const { id } = req.params
        try {
            await db.People.restore({
                where: {
                    id: Number(id),
                },
            })
            return res.status(200).json({ message: `id ${id} restaurado.` })
        } catch (error) {}
    }

    static async getAllEnrolments(req, res) {
        const { student_id } = req.params
        try {
            const result = await db.Enrolments.findAll({
                where: {
                    student_id: Number(student_id),
                },
            })

            return res.status(200).json(result)
        } catch (error) {
            return res.status(404).json({ message: error.message })
        }
    }

    static async getOneEnrolment(req, res) {
        const { enrolment_id, student_id } = req.params
        try {
            const result = await db.Enrolments.findOne({
                where: {
                    id: Number(enrolment_id),
                    student_id: Number(student_id),
                },
            })

            return res.status(200).json(result)
        } catch (error) {
            return res.status(404).json({ message: error.message })
        }
    }

    static async createEnrolment(req, res) {
        const { student_id } = req.params
        const body = req.body
        body.student_id = student_id
        try {
            const result = await db.Enrolments.create(body)

            return res.status(200).json(result)
        } catch (error) {
            return res.status(404).json({ message: error.message })
        }
    }

    static async updateEnrolment(req, res) {
        const { student_id, enrolment_id } = req.params
        const body = req.body
        try {
            await db.Enrolments.update(body, {
                where: {
                    id: Number(enrolment_id),
                    student_id: Number(student_id),
                },
            })

            const result = await db.Enrolments.findOne({
                where: {
                    id: Number(enrolment_id),
                },
            })

            return res.status(200).json(result)
        } catch (error) {
            return res.status(404).json({ message: error.message })
        }
    }

    static async deleteEnrolment(req, res) {
        const { student_id, enrolment_id } = req.params
        try {
            await db.Enrolments.destroy({
                where: {
                    id: Number(enrolment_id),
                    student_id: Number(student_id),
                },
            })

            return res
                .status(200)
                .json({ message: `O id ${enrolment_id} foi deletado.` })
        } catch (error) {
            return res.status(404).json({ message: error.message })
        }
    }
}

module.exports = PersonController
