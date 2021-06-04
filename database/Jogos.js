const Sequelize = require('sequelize')
const connection = require('./database')

const Jogos = connection.define('Jogos', {
    title: { 
        type: Sequelize.STRING,
        allowNull: false
    },
    year:{
        type: Sequelize.STRING,
        allowNull: false
    },
    price:{
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

Jogos.sync({force: false}).then(() => {}).catch((msg) => {console.log(msg)})

module.exports = Jogos;
