const express = require('express')
var router = express.Router()

//localhost:3000/api/cliente/listarclientes
router.get('/listarclientes', function(req, res){
    res.json('lista de clientes')
    res.json('Lucas Vilar: Estada das Olarias 550, 8263-160, 41992431403, PR, lukviolar.lv@gmail.com')
    res.json('Marco Antônio Storrer Weber: R. Jacob Valenga 2771, 83305-005,41988778962, PR, marcoweber0405@gmail.com')
})

//localhost:3000/api/listarnome
router.get('/listarnome/:nome', function(req, res){
    res.json('lista de clientes pelo nome')
})

//localhost:3000/api/cliente/listartelefone
router.get('/listarportelefone/:telefone', function(req, res){
    res.json('lista de cliente com esse telefone')
})

//localhost:3000/api/cliente/listarporcpftes 
router.get('/listarporcpf/:CPF', function(req, res){
    res.json('lista dos clientes com esse cpf')
})

//localhost:3000/api/cliente/listaporCEP
router.get('/listarporCEP/: CEP', function(req, res){
    res.json('lista de clientes com esse CEP')
})

module.exports = router
