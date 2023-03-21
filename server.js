const variaveis = require('./config/sistema/variaveis');
var teste2 = require('request');
const bodyParser = require('body-parser');



servidor = require('./config/sistema/express');

servidor.listen(process.env.PORT || 5000,() => { console.log(variaveis.servidor.mensagem)});

servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({extended: false}));