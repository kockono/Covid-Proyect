const { Router } = require('express');
const Encuestas = require('./models/encuesta');
const router = Router();

router.post('/respuesta', async(req, res) => {
    const { pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, encuestado } = req.body
    const encuesta = new Encuestas({pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, encuestado})
    await encuesta.save()
    res.status(200).json()
})

router.get('/respuestas', async(req, res) => {
    var respuestas = await Encuestas.find()
    return res.status(200).json(respuestas)
})

module.exports = router;