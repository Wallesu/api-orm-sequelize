'use strict'

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Levels', [
            {
                desc_level: 'básico',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                desc_level: 'intermediário',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                desc_level: 'avançado',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ])
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Levels', null, {})
    },
}
