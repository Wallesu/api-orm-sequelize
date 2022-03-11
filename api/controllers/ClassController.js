const db = require('../models')

class ClassController {
    static async getAll(req, res) {
        try {
            const result = await db.Classes.findAll()
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    static async getOne(req, res) {
        const id = req.params.id
        try {
            const result = await db.Classes.findOne({
                where: {
                    id: Number(id),
                },
            })
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    static async create(req, res) {
        const body = req.body
        try {
            const result = await db.Classes.create(req.body)
            return res.status(201).json(result)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    static async update(req, res) {
        const id = req.params.id
        const dataToUpdate = req.body
        try {
            await db.Classes.update(dataToUpdate, {
                where: {
                    id: Number(id),
                },
            })
            const result = await db.Classes.findOne({
                where: {
                    id: Number(id),
                },
            })
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    static async delete(req, res) {
        const id = req.params.id
        try {
            await db.Classes.destroy({
                where: {
                    id: Number(id),
                },
            })
            return res.status(200).json({ message: `id ${id} deletado.` })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }
}

module.exports = ClassController
