const express = require('express');
const { parse }  = require('querystring');
const servidor = express();
const rotas = express.Router();
const controller = require('../../app/controller/InfolinkController');
const apijs = require('../../app/modules/api');
let _ctrl = new controller();
let api = new apijs();


rotas.get('/',function(req,res){
    var caminho = ( __dirname+'/consulta.html');
    res.send("Express on Vercels");
    //res.sendFile(caminho);
});


rotas.post('/api/consulta',function(req,res){
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', async () => {
        body = parse(body);
        var params = await api.start(body.url);
        let formData = {'url': params};
        res.send(formData);
    });
});

servidor.use('/',rotas);
module.exports = servidor;