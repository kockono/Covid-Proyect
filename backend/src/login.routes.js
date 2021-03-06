const { Router } = require('express');
const Usuarios = require('./models/user');
const jwt = require('jsonwebtoken');
const router = Router();

router.post('/signup', async(req, res) => {
    const { nombre, apellido, username, password, tipo } = req.body;
    const newUser = new Usuarios ({nombre, apellido, username, password, tipo});
    const user = await Usuarios.findOne({username})
    if(user) return res.status(400).send("El Email Ya existe");
    await newUser.save();
    const token = jwt.sign({_id: newUser._id}, 'secreto')
    res.status(200).json({token})
});

router.post('/signin', async(req, res) => {
    const { username, password} = req.body;

    const user = await Usuarios.findOne({username})
    const tipo = user.tipo;
    console.log(tipo)
    if(user.password !== password) return res.status(401).send("Contraseña incorrecta");
    const token = jwt.sign({_id: user._id}, 'secreto');

    res.status(200).json({token, tipo})

});

router.delete('/delete', async(req, res) => {
    const { username, password } = req.body;
    const dUser = await Usuarios.deleteOne({username})
    if(!dUser) return res.status(400).send("El usuarios no existe");
    if(dUser.password !== password) return res.status(401).send("Contraseña incorrecta o no puede eliminar este usuario");
    return res.status(200).json()
})

router.get('/usuarios', async(req, res) => {
    var datos = await Usuarios.find()
    return res.status(200).json(datos)
})

router.get('/profile', (req,res) => {
    res.send(req.userId);
})


module.exports = router;