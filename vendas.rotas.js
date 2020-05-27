const express = require('express')
var router = express.Router()

//localhost:3000/api/listar/vendas
router.get('/listarvendas', function(req, res){
    res.json('lista de vendas')
})

//localhost:3000/api/vendas/listadeprodutosvendidos
router.get('/listarprodutosvendidos', function(req, res){
    res.json('lista de produtos vendidos desse modelo')
})

//localhost:3000/api/vendas/listapordatadevenda
router.get('/listarpordatadevenda/:data_de_venda', function(req, res){
    res.json('lista de pordutos vendidos nessa data')
})

//localhost:3000/api/vendas/listaporcpfcomprador
router.get('/listarporcpfcomprador/:cpf_comprador', function(req, res){
    res.json('lista de produtos comprados com esse CPF')
})


module.exports = router
