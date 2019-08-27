const express = require('express')
const professoresRouter = require('./routes/professores')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine','ejs')
app.set('views','views')
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/professores', professoresRouter)
app.get('/', (req, res, next) => {
    res.render('index',{
        nome:"Desconhecido"
    })
    app.post('/', (req,res,next)=>{
        res.render('index', {
            nome:req.body.nome
        })
    })
})
app.listen(3000)
