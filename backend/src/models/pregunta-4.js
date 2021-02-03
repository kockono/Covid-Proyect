const { Schema, model } = require('mongoose');

const pregSchema = new Schema ({
    muySeguido: Number,
    seguido: Number,
    noTanSeguido: Number,
    nadaSeguido: Number,

},{
    timestamps:true
});

module.exports = model('preguntasCuatro', pregSchema);