const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {sequelize.define('Product', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    images: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    color: {
        type: DataTypes.ENUM('Negro', 'Blanco', 'Rojo', 'Verde', 'Azul', 'Marron', 'Gris', 'Rosa', 'Amarillo', 'Morado'),
        allowNull: false
    }
    // category: {
    //     type: DataTypes.ENUM('Taza', 'Tupper', 'Termos', 'Verde', 'Azul', 'Marron', 'Gris', 'Rosa', 'Amarillo', 'Morado'),
    //     allowNull: false
    // }
},
{timestamps: false}
)
}