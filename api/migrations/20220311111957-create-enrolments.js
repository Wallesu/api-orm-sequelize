'use strict'
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Enrolments', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            status: {
                type: Sequelize.STRING,
            },
            class_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'Classes', key: 'id' },
            },
            student_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'People', key: 'id' },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Enrolments')
    },
}
