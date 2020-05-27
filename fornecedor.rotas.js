const express = require('express')
var router = express.Router()

//localhost:3000/api/fornecedor/listarfornecedor
router.get('/listarfornecedor', function(req, res){
    res.json('Oriano Glauber Pai, orianoglauber@gmail.com, 876.495.999-03')
})

//localhost:3000/api/fornecedor/listarnomefornec
router.get('/listarpornomefornec/:nomefornec', function(req, res){
    res.json('orianoglauber@gmail.com, 876.495.999-03')
})

//localhost:3000/api/fornecedor/listarporemail
router.get('/listarpoemail', function(req, res){
    res.json('lista de fornecedores com este email:')
    res.json('Oriano Glauber Pai, 876.495.999-03')
})

//localhost:3000/api/fornecedor/listarCPF
router.get('/listarcpffornec/: CPF', function(req, res){
    res.json('lista de fornecedores com esse CPF')
    res.json('Oriano Glauber Pai, orianoglauber@gmail.com')
})

module.exports = router
