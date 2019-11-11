const { Model, DataTypes } = require('sequelize');

class Repository extends Model {
    static init(sequelize) {
        super.init({
            Name: DataTypes.STRING,
            Description: DataTypes.STRING,
            Login: DataTypes.STRING,
            CreatedAt: DataTypes.DATE,
            UpdatedAt: DataTypes.DATE,
        }, {
            sequelize,
            freezeTableName: true,
        });
    }

    static associate(models) {
        this.belongsTo(models.Language, { foreignKey: 'IdLanguage', as: 'Language' });
    }
}

module.exports = Repository;