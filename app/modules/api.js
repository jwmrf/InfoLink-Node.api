var request = require('request');
var jQuery = require('cheerio');
var sizeOf = require('image-size');
var url = require('url');
var http = require('https');



function VideoCrowler() {

}
VideoCrowler.prototype.start =  function (req, res) {
    console.log("teste");
    let flag = 1;

    if (flag == 1) {


        request('', function (erro, resposta, body) {
            console.log(erro);
            //console.log(resposta);
            var site = jQuery.load(body);

            site('img').each(  function () {
                var porra = site(this);
                //console.log(porra.attr('src'));
                var tamanho =  VideoCrowler.prototype.PegaTamanho(porra.attr('src'));
                if (tamanho != undefined) {
                    console.log(tamanho.agent.sockets);
                }

            })
        });
    }else{
        http.get(options,function (response){
            var chunks = [];
            response.on('data', function (chunk) {
              chunks.push(chunk);
            }).on('end', function() {
              var buffer =  Buffer.concat(chunks);
              console.log(sizeOf(buffer));
            });
            
        });
    }


};
VideoCrowler.prototype.PegaTamanho =  function (urlImagem,retorno){
    var options =  url.parse(urlImagem);
        return http.get(options,function (response){
        var chunks = [];
        response.on('data', function (chunk) {
          chunks.push(chunk);
        }).on('end',  function() {
          var buffer =  Buffer.concat(chunks);
          console.log(response.agent.res);

        });
        
        
    });
    //console.log(retorno);
    return retorno;
};

module.exports = VideoCrowler;