const express = require("express")
const cors = require("cors");

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://covidUser:usuarioCovid@cluster0.z6sl4.mongodb.net/Covid?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let app = express();

let puerto = 3000

app.use(cors())
app.use(express.json( {limit:'100mb'} ))
app.use(express.urlencoded(
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

app.get('/api/usuarios', function(req, res){
    client.connect(err => {
        client.db("Covid").collection("usuarios").find().each(function(err, doc){
            if(doc != null){
                let info = doc
                res.send(info)
            }
        })
        client.close();
    });
})

// app.get('/api/signin', function(req, res){
//     //const { nombre, apellido, username, password, tipo } = req.body
//     client.connect(err => {
//         client.db("Covid").collection("usuarios").insertOne({
//             nombre: "Chris",
//             apellido: "Marquez",
//             username: "kockono@gamil.com",
//             password: "Chirseselmejor",
//             tipo: "admin"
//         })
//         res.send(
//             "Se ha insertado con exito"
//         )
//         client.close()
//     })
// })

app.listen(puerto, function () {
    console.log("Api corriendo en el puerto " + puerto);
})