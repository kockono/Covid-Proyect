const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
    nombre: String,
    apelldio: String,
    username: {
        type: String,
        trim: true,
        unique: ['Existe ya un nombre de usuario con esta información', true]
    },
    password: String,
    tipo: String,
},{
    timestamps:true
});

module.exports = model('usuarios', userSchema);