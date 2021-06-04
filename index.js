const express = require('express')
const app = express()
const modelJogos = require('./database/Jogos')
const connection = require('./database/database')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

connection.authenticate().then( () => {console.log('Conexão feita com Sucesso')}).catch((msgErro) => {msgErro})

app.get('/', (req, res) => {
    modelJogos.findAll({raw : true, order:[['id', 'ASC'] ]})
    .then(jogos =>{res.send({jogos:jogos})})
});

app.get('/game/:id', (req, res) => {
    var id=req.params.id
    modelJogos.findOne({ where:{id:id}}).then(jogo => {res.send({jogo:jogo})})
});



app.listen(8081, () => {console.log('App Rodando')});