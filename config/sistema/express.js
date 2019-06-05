const express = require('express');
const servidor = express();
const rotas = express.Router();
const controller = require('../../app/controller/InfolinkController');
const apijs = require('../../app/modules/api');

let _ctrl = new controller();
let api = new apijs();

rotas.get('/',_ctrl.getAll);
rotas.get('/api/:id',api.start);
servidor.use('/',rotas);
module.exports = servidor;