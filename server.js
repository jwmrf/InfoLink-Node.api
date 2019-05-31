const variaveis = require('../infoLink.api/config/sistema/variaveis');
var teste2 = require('request');
teste2('https://www.imdb.com/title/tt1583421',function(err,res,body){
    console.log(typeof(res.body));
});


//teste.use(bodyParser.json());
//teste.use(bodyParser.urlencoded({extended: false}));

servidor = require('../infoLink.api/config/sistema/express');

servidor.listen(5000,() => { console.log(variaveis.servidor.mensagem)});

//teste.use('/piru',teste2);z\x\zx\zx\zxz