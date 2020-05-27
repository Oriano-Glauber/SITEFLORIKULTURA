const express = require('express')
var router = express.Router()

//localhost:3000/api/listar/produto
router.get('/listarprodutos', function(req, res){
    res.json('lista de produtos')
})

//localhost:3000/api/produto/listarportipo
router.get('/listarportipo/:tipo', function(req, res){
    res.json('lista de tipo de produtos')
})

//localhost:3000/api/produto/listarporcodigo
router.get('/listarporcodigo/:codigo', function(req, res){
    res.json('lista de produtos com esse código')
})

//localhost:3000/api/produto/listarfornecedor
router.get('/listarfornecedor/:fornecedor', function(req, res){
    res.json('lista de fornecedores do produto')
})

//localhost:3000/api/produto/inserirnovoproduto
router.post('/inserirnovoproduto', function(req, res){
    res.json('novo produto inserido')
})

//localhost:3000/api/produto/listarporpreco
router.get('/listarporpreco/:preco', function(req, res){
    res.json('lista de produtos com esse preço')
})

//localhost:3000/api/produto/inserirpreco
router.post('/inserirpreco', function(req, res){
    res.json('novo preço inserido')
})


module.exports = router
