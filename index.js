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

app.post('/game', (req, res) => {
    var title = req.body.title
    var year = req.body.year
    var price = req.body.price
    
    modelJogos.create({title:title, year:year, price:price}).then(()=>{res.send("Dados Salvo")})
});

app.put('/game/:id', (req, res) => {
    var id=req.params.id
    var title=req.body.title
    modelJogos.update({title:title},{ where: {id:id}}).then(()=>{res.send('Atulizado')})
});

app.delete('/game/:id', (req, res) => {
    var id=req.params.id
    modelJogos.destroy({ where: {id:id}}).then(()=>{res.send('Deletado')})
      
});


app.listen(8081, () => {console.log('App Rodando')});