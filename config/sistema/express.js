const express = require('express');
const servidor = express();
const rotas = express.Router();
const controller = require('../../app/controller/InfolinkController');

let _ctrl = new controller();

rotas.get('/',_ctrl.getAll);
servidor.use('/',rotas);
module.exports = servidor;