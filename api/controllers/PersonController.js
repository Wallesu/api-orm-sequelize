const db = require('../models')

//static serve para usar o método sem a instância da classe
class PersonController {
    static async getAll(req, res) {
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
}

module.exports = PersonController
