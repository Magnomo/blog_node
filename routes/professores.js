const express= require('express')
const router = express.Router()
const professores = []

router.get('/', (req,res,next)=>{
    res.render('professores/listaprofessores',{
        professores:professores,
    })
})
router.post('/', (req,res,next)=>{
    professores.push({
        nome:req.body.nome
    })
    res.render('professores/listaprofessores',{
        professores:professores
    })
})
module.exports= router;