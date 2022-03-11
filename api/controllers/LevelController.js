const db = require('../models')

class LevelController {
    static async getAll(req, res) {
        try {
            const result = await db.Levels.findAll()
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    static async getOne(req, res) {
        const id = req.params.id
        try {
            const result = await db.Levels.findOne({
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
            const result = await db.Levels.create(req.body)
            return res.status(201).json(result)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    static async update(req, res) {
        const id = req.params.id
        const dataToUpdate = req.body
        try {
            await db.Levels.update(dataToUpdate, {
                where: {
                    id: Number(id),
                },
            })
            const result = await db.Levels.findOne({
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
            await db.Levels.destroy({
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

module.exports = LevelController
