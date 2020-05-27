const express = require('express')
var router = express.Router()

//localhost:3000/api/fornecedor/listarfornecedor
router.get('/listarfornecedor', function(req, res){
    res.json('Oriano Glauber Pai, orianoglauber@gmail.com')
    res.json('Oriano Glauber Junior, orianojunior@gmail.com')
    res.json('Oriano Glauber Neto, orianoneto@gmail.com')
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
})

//localhost:3000/api/fornecedor/listarCPF
router.get('/listarcpffornec/: CPF', function(req, res){
    res.json('lista de fornecedores com esse CPF')
})

module.exports = router
