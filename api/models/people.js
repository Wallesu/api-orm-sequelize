'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class People extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            People.hasMany(models.Enrolments, {
                foreignKey: 'student_id',
                scope: { status: 'confirmado' },
                as: 'people_enrolmentsConfirmed',
            })
            People.hasMany(models.Classes, {
                foreignKey: 'teacher_id',
            })
        }
    }
    People.init(
        {
            name: {
                type: DataTypes.STRING,
                validate: {
                    validate: function (data) {
                        if (data.length < 3)
                            throw new Error(
                                'O campo nome deve ter mais de 3 caracteres.'
                            )
                    },
                },
            },
            active: DataTypes.BOOLEAN,
            email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: {
                        args: true,
                        msg: 'dado do tipo e-mail inválido',
                    },
                },
            },
            role: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'People',
            paranoid: true,
            defaultScope: {
                where: {
                    active: true,
                },
            },
            scopes: {
                all: {
                    where: {},
                },
            },
        }
    )
    return People
}
