const { Schema, model } = require('mongoose');

const pregSchema = new Schema ({
    nombre: String,
    apelldio: String,
    username: {
        type: String,
        trim: true,
        unique: ['Existe ya un nombre de usuario con esta información', true]
    },
    password: String,
    tipo: String,
    encuestado: String
},{
    timestamps:true
});

module.exports = model('preguntas', pregSchema);