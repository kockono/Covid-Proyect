const express = require("express")
const cors = require("cors");
// const bodyParser = require("body-parser"); El body parser komaba se dejo de usar  en la version de Express 4.16.0 o mayor ya lo trae incluido el express

let app = express();

let puerto = 3000


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://covidUser:<password>@cluster0.z6sl4.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.use(cors())
// app.use(bodyParser.json( {limit:'100mb'} ))
app.use(express.json( {limit:'100mb'} ))
app.use(express.urlencoded(
    // app.use(bodyParser.urlencoded(
    {
        extended: true,
        limit: '100mb'
    }
))

app.all('*', function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

app.get('/api/inicio', function(req, res){
    res.send({
        msg: 'Funciona'
    })
})

app.listen(puerto, function () {
    console.log("Api corriendo en el puerto " + puerto);
})