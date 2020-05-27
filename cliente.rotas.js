const express = require('express')
var router = express.Router()

//localhost:3000/api/cliente/listarclientes
router.get('/listarclientes', function(req, res){
    res.json('lista de clientes')
})

//localhost:3000/api/listarpornome/lucas
router.get('/listarpornome/:nome', function(req, res){
    res.json('lista de clientes com este nome:')
})

//localhost:3000/api/cliente/listarportelefone/41992431403
router.get('/listarportelefone/:telefone', function(req, res){
    res.json('lista de clientes com este telefone:')
})

//localhost:3000/api/cliente/listarporcpf/13283344906
router.get('/listarporcpf/:cpf', function(req, res){
    res.json('lista de clientes com este CPF:')
})

//localhost:3000/api/cliente/inserirnovocliente
router.post('/inserirnovocliente', function(req, res){
    res.json('clientes novos inseridos')
})

module.exports = router
