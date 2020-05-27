const express = require('express')
var router = express.Router()

//localhost:3000/api/cliente/listarclientes
router.get('/listarclientes', function(req, res){
    res.json('lista de clientes')
    res.json('Lucas Vilar: Estada das Olarias 550, 8263-160, 41992431403, PR, lukviolar.lv@gmail.com')
})

//localhost:3000/api/inserirnome 
router.post('/inserirnome', function(req, res){
    res.json('nomes novos inseridos')
})

//localhost:3000/api/cliente/inserirtelefone
router.post('/inserirtelefone', function(req, res){
    res.json('telefones novos inseridos')
})

//localhost:3000/api/cliente/inserircpf
router.post('/inserircpf', function(req, res){
    res.json('novos cpfs inseridos')
})

//localhost:3000/api/cliente/inserirnovocliente
router.post('/inserirnovocliente', function(req, res){
    res.json('clientes novos inseridos')
})

module.exports = router
