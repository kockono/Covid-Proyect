const { Router } = require('express');
const Encuestas = require('./models/encuesta');
const router = Router();


router.get('/respuestas', async(req, res) => {
    var respuestas = await Encuestas.find()
    return res.status(200).json(respuestas)
})

router.post('/preguntas/:id', async(req, res) => {


    let question =  {pregunta1, pregunta2, pregunta3, pregunta4, pregunta5} = req.body;
    let ID = req.params.id;
    let questionOriginal;

    Encuestas.findById(ID, (err , doc) => {
        questionOriginal = doc;

        if(question.pregunta1 === 1) {
            questionOriginal.pregunta1.pocoFrecuente = questionOriginal.pregunta1.Frecuente + 1;
        }
        if(question.pregunta1 === 2){
            questionOriginal.pregunta1.pocoFrecuente = questionOriginal.pregunta1.pocoFrecuente + 1;
        }
        if(question.pregunta1 === 3){
            questionOriginal.pregunta1.nunca = questionOriginal.pregunta1.nunca +1
        }
        if(question.pregunta2 === 1) {
            questionOriginal.pregunta2.si = questionOriginal.pregunta2.si + 1;
        }
        if(question.pregunta2 === 2) {
            questionOriginal.pregunta2.no = questionOriginal.pregunta2.no + 1;
        }
        if(question.pregunta3 === 1) {
            questionOriginal.pregunta3.si = questionOriginal.pregunta3.si + 1;
        }
        if(question.pregunta3 === 2) {
            questionOriginal.pregunta3.no = questionOriginal.pregunta3.no + 1;
        }
        if(question.pregunta4 === 1) {
            questionOriginal.pregunta4.mu = questionOriginal.pregunta4.mu + 1;
        }
        if(question.pregunta4 === 2) {
            questionOriginal.pregunta4.se = questquestionOriginalon.pregunta4.se + 1;
        }
        if(question.pregunta4 === 3) {
            questionOriginal.pregunta4.no = questionOriginal.pregunta4.no + 1;
        }
        if(question.pregunta4 === 4) {
            questionOriginal.pregunta4.na = questionOriginal.pregunta4.na + 1;
        }
        if(question.pregunta5 === 1) {
            questionOriginal.pregunta5.si = questionOriginal.pregunta5.si + 1;
        }
        if(question.pregunta5 === 2) {
            questionOriginal.pregunta5.no = questionOriginal.pregunta5.no + 1;
        }
    
        Encuestas.findByIdAndUpdate(ID, {$set: questionOriginal}, {new:true},(err, doc) => {
                if(!err) {res.send(doc)}
                  else { console.log(`Error en encontrar la empresa: `+ JSON.stringify(err, undefined, 2));}
        
            })
    

    })

    const encuesta = new Preguntas({questionOriginal})
    await encuesta.save()
    
})

router.get('/encuestas/:id', async(req, res) => {
    let ID = req.params.id;
    var datos = await Encuestas.findById(ID);
    return res.status(200).json(datos)
})

module.exports = router;