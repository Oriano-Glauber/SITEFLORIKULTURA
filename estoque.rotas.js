const express = require('express')
var router = express.Router()

//localhost:3000/api/estoque/listarestoque
router.get('/listarestoque', function(req, res){
    res.json('lista do estoque')
    res.json('Girassol, 02, 30, 31/01/2004, 1350')
})

//localhost:3000/api/estoque/listarcodigodoproduto
router.get('/listarcodigodoproduto/:codigo_produto', function(req, res){
   res.json('lista do estoque com o código do produto')
    res.json('Girassol, 30, 31/01/2004, 1350,00 reais')
})

//localhost:3000/api/estoque/listarporquantidade
router.get('/listarporquantidade/:quantidade_produto', function(req, res){
    res.json('lista do estoque com a quantidade do produto')
    res.json('Girassol, 02, 31/01/2004, 1350,00')
})

//localhost:3000/api/estoque/listarpordatacompra
router.get('/listarpordatacompra/:data_de_compra', function(req, res){
    res.json('lista do estoque com a data de compra')
    res.json('Girassol, 02, 30, 1350,00 reais')
})

//localhost:3000/api/estoque/listarporpreço
router.get('/listarporpreço/:preço', function(req, res){
    res.json('lista do estoque com esse preço')
    res.json('Girassol, 02, 30, 31/01/2004')
})

module.exports = router
