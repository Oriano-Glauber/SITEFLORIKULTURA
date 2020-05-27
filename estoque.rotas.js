const express = require('express')
var router = express.Router()

//localhost:3000/api/estoque/listarestoque
router.get('/listarestoque', function(req, res){
    res.json('lista do estoque')
})

//localhost:3000/api/estoque/listarcodigodoproduto
router.get('/listarcodigodoproduto/:codigo_produto', function(req, res){
    res.json('lista do estoque com o código do produto')
})

//localhost:3000/api/estoque/listarporquantidade
router.get('/listarporquantidade/:quantidade_produto', function(req, res){
    res.json('lista do estoque com a quantidade do produto')
})

//localhost:3000/api/estoque/listarpordatacompra
router.get('/listarpordatacompra/:data_de_compra', function(req, res){
    res.json('lista do estoque com a data de compra')
})

//localhost:3000/api/estoque/listarpordatacompra
router.put('/inserirnovacompra', function(req, res){
    res.json('novas compras inseridas')
})

module.exports = router
