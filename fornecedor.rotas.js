const express = require('express')
var router = express.Router()

//localhost:3000/api/fornecedor/listarfornecedor
router.get('/listarfornecedor', function(req, res){
    res.json('Oriano Glauber Pai, orianoglauber@gmail.com, 876.495.999-03')
    res.json('Oriano Glauber Junior, orianojunior@gmail.com, 596.485.365-04')
    res.json('Oriano Glauber Neto, orianoneto@gmail.com, 457.958.125-05')
})

//localhost:3000/api/fornecedor/listarnomefornec
router.get('/listarpornomefornec/:nomefornec', function(req, res){
    res.json('Oriano Glauber')
    res.json('Oriano Glauber Junior')
    res.json('Oriano Glauber Neto')
})

//localhost:3000/api/fornecedor/listarporemail
router.get('/listarpoemail', function(req, res){
    res.json('lista de fornecedores com este email:')
    res.json('orianoglauber@gmail.com')
    res.json('orianojunior@gmail.com')
    res.json('orianoneto@gmail.com')
})

//localhost:3000/api/fornecedor/listarCPF
router.get('/listarcpffornec/: CPF', function(req, res){
    res.json('lista de fornecedores com esse CPF')
    res.json('876.495.999-03')
    res.json('596.485.365-04')
    res.json('457.958.125-05')
    
})

module.exports = router
