const { Schema, model } = require('mongoose');

const pregSchema = new Schema ({
    frecuente: Number,
    pocoFrecuente: Number,
    nunca: Number,

},{
    timestamps:true
});

module.exports = model('preguntasUno', pregSchema);