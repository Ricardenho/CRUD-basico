const Sequelize = require('sequelize')

//parametros: nome do Banco, nome do usuário, Senha
const connection = new Sequelize('listaDeJogos','root','nodejs',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection