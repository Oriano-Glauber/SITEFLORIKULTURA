const express = require('express');
var app = express();

app.use(express.static('html'))
app.use(express.static('css'))


app.use('/api/cliente', require('./rotas/cliente.rotas'))
app.use('/api/fornecedor', require('./rotas/fornecedor.rotas'))
app.use('/api/estoque', require('./rotas/estoque.rotas'))
app.use('/api/produto', require('./rotas/produto.rotas'))
app.use('/api/vendas', require('.rotas/vendas.rotas'))


let server = app.listen(3000, function(){
    let port = server.address().port;
    console.log("Servidor iniciado em http://localhost:%s", port);
});
