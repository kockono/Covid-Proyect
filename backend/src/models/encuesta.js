const { Schema, model } = require('mongoose');

const pregSchema = new Schema ({
    pregunta1: {
        frecuente: Number,
        pocoFrecuente: Number,
        nunca: Number,
    },
    pregunta2: {
        si: Number,
        no: Number,
    },
    pregunta3: {
        si: Number,
        no: Number,
    },
    pregunta4: {
        muySeguido: Number,
        seguido: Number,
        noTanSeguido: Number,
        nadaSeguido: Number,
    },
    pregunta5: {
        si: Number,
        no: Number,
    }

},{
    timestamps:true
});

module.exports = model('preguntas', pregSchema);