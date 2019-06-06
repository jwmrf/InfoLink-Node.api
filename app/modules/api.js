'use strict';
var request = require('request');
var jQuery = require('cheerio');
var sizeOf = require('image-size');
var url = require('url');
var http = require('https');

let maior = 0;
let urlFinal = "";

function VideoCrowler() {
}

VideoCrowler.prototype.start = async function (req, res)  {

 
        //Transformar em função
         request('http://www.adorocinema.com/series/serie-7157/video-19562036/', async function (erro, resposta, body) {
         if(erro){
            console.log(erro);
         }   

            var site = jQuery.load(body);

            site('img').each(async function () {
                var imagem = site(this);

                var tamanho = await PegaTamanho(imagem.attr('src'));

                if (tamanho != undefined) {
                    if(tamanho.width > tamanho.height && tamanho.type != 'gif'){
                        if(tamanho.width * tamanho.height > maior){
                            maior = tamanho.width * tamanho.height;
                            urlFinal = imagem.attr('src');
                            console.log("- - - - - - - ");
                            console.log(tamanho);
                            //console.log(maior);
                            console.log(urlFinal);
                        }
                    }
                }
            })
        });

};
  function PegaTamanho (urlImagem){
    var options =  url.parse(urlImagem); 
    return new Promise(function(resolve,reject){
       http.get(urlImagem,function (response){
            var chunks = [];
            response.on('data', function (chunk) {
              chunks.push(chunk);
            }).on('end',  function() {
              var buffer =  Buffer.concat(chunks);
              resolve(sizeOf(buffer));
            });
        });
    })
};

module.exports = VideoCrowler;