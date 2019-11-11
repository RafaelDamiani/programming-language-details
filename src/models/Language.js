const { Model, DataTypes } = require('sequelize');

class Language extends Model {
    static init(sequelize) {
        super.init({
            Name: DataTypes.STRING,
        }, {
            sequelize,
            freezeTableName: true,
        });
    }

    static associate(models) {
        this.hasMany(models.Repository, { foreignKey: 'id', as: 'Repositories' });
    }
}

module.exports = Language;