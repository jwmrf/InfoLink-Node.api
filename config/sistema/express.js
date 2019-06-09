const express = require('express');
const { parse }  = require('querystring');
const servidor = express();
const rotas = express.Router();
const controller = require('../../app/controller/InfolinkController');
const apijs = require('../../app/modules/api');

let _ctrl = new controller();
let api = new apijs();

//rotas.get('/',_ctrl.getAll);
rotas.get('/',function(req,res){
    res.send('<input type="text" value="teste">');
})
rotas.get('/consulta',function(req,res){
    res.sendFile("../../../public/views/consulta.html");
});
rotas.get('/api/:id',api.start);
rotas.post('/api/consulta',function(req,res){
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', async () => {
        body = parse(body);
        var teste = await api.start(body.url);
        res.send(teste);
    });
});
servidor.use('/',rotas);
module.exports = servidor;