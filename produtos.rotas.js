const express = require('express')
var router = express.Router()

//localhost:3000/api/listar/produto
router.get('/listarprodutos', function(req, res){
    res.json('lista de produtos')
    res.json('orquídia, planta, 01, esaflores, novo, 70,00, 80,00')
})

//localhost:3000/api/produto/listarportipo
router.get('/listarportipo/:tipo', function(req, res){
    res.json('lista de tipo de produtos')
    res.json('planta')
})

//localhost:3000/api/produto/listarporcodigo
router.get('/listarporcodigo/:codigo', function(req, res){
    res.json('lista de produtos com esse código')
    res.json('01')
})

//localhost:3000/api/produto/listarfornecedor
router.get('/listarfornecedor/:fornecedor', function(req, res){
    res.json('lista de fornecedores do produto')
    res.json('esalflores')
})

//localhost:3000/api/produto/listarnovosprodutos
router.get('/listarnovosprodutos/:novo_prodto', function(req, res){
    res.json('listar novos produtos')
    res.json('novo')
})

//localhost:3000/api/produto/listarporpreco
router.get('/listarporpreco/:preco', function(req, res){
    res.json('lista de produtos com esse preço')
    res.json('70,00')
})

//localhost:3000/api/produto/listarnovospreços
router.get('/listarnovospreços/: novo_preço', function(req, res){
    res.json('lista de novos preços')
    res.json('80,00 reais')
})


module.exports = router
