const variaveis = require('../infoLink.api/config/sistema/variaveis.js');
var teste2 = require('request');
const bodyParser = require('body-parser');



servidor = require('../infoLink.api/config/sistema/express');

servidor.listen(5000,() => { console.log(variaveis.servidor.mensagem)});

servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({extended: false}));