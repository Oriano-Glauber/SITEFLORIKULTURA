const express = require('express')
var router = express.Router()

//localhost:3000/api/cliente/listarclientes
router.get('/listarclientes', function(req, res){
    res.json('lista de clientes')
    res.json('Lucas Vilar: Estada das Olarias 550, 8263-160, 41992431403, PR, lukviolar.lv@gmail.com')
})

//localhost:3000/api/listarnome
router.get('/listarnome/:nome', function(req, res){
    res.json('lista de clientes pelo nome')
    res.json('Estada das Olarias 550, 8263-160, 41992431403, PR, lukviolar.lv@gmail.com')
})

//localhost:3000/api/cliente/listartelefone
router.get('/listarportelefone/:telefone', function(req, res){
    res.json('lista de cliente com esse telefone')
    res.json('Lucas Vilar, Estada das Olarias 550, 8263-160, lukviolar.lv@gmail.com')
})

//localhost:3000/api/cliente/listarporcpftes 
router.get('/listarporcpf/:CPF', function(req, res){
    res.json('lista dos clientes com esse cpf')
    res.json('lucas Vilar, Estada das Olarias 550, 8263-160, 41992431403, PR, lukviolar.lv@gmail.com')
})

//localhost:3000/api/cliente/listaporCEP
router.get('/listarporCEP/: CEP', function(req, res){
    res.json('lista de clientes com esse CEP')
    res.json('lucas Vilar, Estada das Olarias 550, 41992431403, PR, lukviolar.lv@gmail.com')
})

module.exports = router
