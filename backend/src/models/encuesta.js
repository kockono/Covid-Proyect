const { Schema, model } = require('mongoose');

const pregSchema = new Schema ({
    pregunta1: String,
    pregunta2: String,
    pregunta3: String,
    pregunta4: String,
    pregunta5: String,
    encuestado: String
},{
    timestamps:true
});

module.exports = model('preguntas', pregSchema);