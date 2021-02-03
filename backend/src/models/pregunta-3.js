const { Schema, model } = require('mongoose');

const pregSchema = new Schema ({
    si: Number,
    no: Number,

},{
    timestamps:true
});

module.exports = model('preguntasTres', pregSchema);