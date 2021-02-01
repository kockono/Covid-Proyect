const { Router } = require('express');
const Usuarios = require('./models/user');
// const jwt = require('jsonwebtoken');
const router = Router();

router.post('/signup', async(req, res) => {
    const { nombre, apellido, username, password, tipo } = req.body;
    const newUser = new Usuarios ({nombre, apellido, username, password, tipo});
    await newUser.save();
    console.log("Entre");
    // const token = jwt.sign({_id: newUser._id}, 'secreto')
    res.status(200).json()/*({token})*/
});

router.post('/signin', async(req, res) => {
    const { username, password} = req.body;

    const user = await Usuarios.findOne({username})
    if(!user) return res.status(401).send("El Email No Existe");
    if(user.password !== password) return res.status(401).send("Contraseña Erronea");

    // const token = jwt.sign({_id: user._id}, 'secreto');
    return res.status(200).json(); //({token})
});

router.get('/usuarios', async(req, res) => {
    var datos = await Usuarios.find()
    console.log(datos)
    return res.status(200).json()
})

router.get('/profile', (req,res) => {
    res.send(req.userId);
})

// function verifyToken(req, res, next) {
//     if(!req.headers.authorization){
//         return res.status(401).send('Anuthorize Request');
//     }
//     const token = req.headers.authorization.split(' ')[1];
//     if(token === 'null') {
//         return res.status(401).send('Anauthorize Request');
//     }
//     const payload = jwt.verify(token, 'secreto');
//     req.userId = payload._id;
//     next();
// }

module.exports = router;