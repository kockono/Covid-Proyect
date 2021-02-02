const express = require("express")
const cors = require("cors");
const app = express();
require('dotenv').config()

const puerto = 3000

const mongoose = require('mongoose');

const uri = process.env._URI

const Conexion = () => {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, (e) =>{
        if(e) throw new console.error(e);
            console.log("Base de datos conectada");
    });
}
Conexion();

const db = mongoose.connection

app.use(cors())
app.use(express.json( {limit:'100mb'} ))
app.use(express.urlencoded({extended: true,limit: '100mb'}))

app.all('*', function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

app.use('/api', require('./login.routes'));
app.use('/api', require('./encuesta.routes'))

app.listen(puerto, function () {
    console.log("Api corriendo en el puerto " + puerto);
})