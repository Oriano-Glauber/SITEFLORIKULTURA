const express = require('express')
var router = express.Router()

//localhost:3000/api/listar/vendas
router.get('/listarvendas', function(req, res){
    res.json('lista de vendas')
    res.json('copo de leite, 04/05/2004, 673.876.999-07')
})

//localhost:3000/api/vendas/listadeprodutosvendidos
router.get('/listarprodutosvendidos', function(req, res){
    res.json('lista de produtos vendidos desse modelo')
    res.json('04/05/2004, 673.876.999-07')
})

//localhost:3000/api/vendas/listapordatadevenda
router.get('/listarpordatadevenda/:data_de_venda', function(req, res){
    res.json('lista de pordutos vendidos nessa data')
    res.json('copo de leite, 673.876.999-07')
})

//localhost:3000/api/vendas/listaporcpfcomprador
router.get('/listarporcpfcomprador/:cpf_comprador', function(req, res){
    res.json('lista de produtos comprados com esse CPF')
    res.json('copo de leite, 04/05/2004')
})


module.exports = router
