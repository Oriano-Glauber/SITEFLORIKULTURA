const express = require('express')
var router = express.Router()


//localhost:3000/api/fornecedor/listarfornecedor
router.get('/listarfornecedor', function(req, res){
    res.json('lista de fornecedores:')
})

//localhost:3000/api/fornecedor/listarnomefornec
router.get('/listarpornomefornec/:nomefornec', function(req, res){
    res.json('lista de fornecedores com este nome:')
})

//localhost:3000/api/fornecedor/listarporemail
router.get('/listarpoemail', function(req, res){
    res.json('lista de fornecedores com este email:')
})

//localhost:3000/api/fornecedor/listarfornecedor
router.post('/inserirnovofornecedeor', function(req, res){
    res.json('Adicionar novo fornecedor:')
})

module.exports = router