var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.send('Pagina Home!');
})

app.get('/registro', function(req, res) {
  res.send('Pagina de Registro');
})

app.get('/login', function(req, res) {
  res.send('Pagina de Logueo');
})

app.get('/login/principal', function(req, res) {
  res.send('Pagina de usuario al loguearse');
})


app.listen(3000, function() {
  console.log('Servidor listo en http://localhost:3000');
})
