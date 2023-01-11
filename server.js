const variaveis = require('./config/sistema/variaveis');
var teste2 = require('request');
const bodyParser = require('body-parser');



servidor = require('./config/sistema/express');

servidor.listen(process.env.PORT || 3000,() => { console.log(process.env.PORT)});

servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({extended: false}));