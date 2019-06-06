const variaveis = require('../infoLink.api/config/sistema/variaveis');
var teste2 = require('request');


//teste.use(bodyParser.json());
//teste.use(bodyParser.urlencoded({extended: false}));

servidor = require('../infoLink.api/config/sistema/express');

servidor.listen(5000,() => { console.log(variaveis.servidor.mensagem)});

