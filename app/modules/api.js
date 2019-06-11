'use strict';
var request = require('request');
var jQuery = require('cheerio');
var sizeOf = require('image-size');
var url = require('url');
var http = require('https');

let maior = 0;
global.urlFinal = "";

function VideoCrowler() {
}

VideoCrowler.prototype.start = async function (req, res) {
  maior = 0;
  //console.log("Entrou na start");

  var retorno = await PegaImagens(req);
  return retorno;
};
function TrataUrl(url) {
  //console.log("Entrou na trata url");
  return new Promise(function (resolve, reject) {
    let verificaHttp = url.search("http");
    resolve(verificaHttp);
  });


}
function PegaImagens(url) {
  //console.log("Entrou na pega imagens");
  return new Promise( function (resolve, reject) {

    request(url, function (erro, resposta, body) {
      if (erro) {
        resolve("Erro, tente outra url");
        console.log(erro);
      }else{

      

      var site = jQuery.load(body);

      site('img').each(async function () {
        var imagem = site(this);
        let verifica = await TrataUrl(imagem.attr('src'));
        if (verifica >= 0) {
          var tamanho = await PegaTamanho(imagem.attr('src'));

          if (tamanho != undefined) {
            if (tamanho.width > tamanho.height && tamanho.type != 'gif') {
              if (tamanho.width * tamanho.height > maior) {
                maior = tamanho.width * tamanho.height;
                urlFinal = imagem.attr('src');
                console.log("- - - - - - - ");
                
              }
            }
          }
        }
      });
    }
      
    });
    setTimeout(function(){
      resolve(urlFinal);
    },3000);

  });
}
function PegaTamanho(urlImagem) {
  //console.log("Entrou na pega tamanho");
  var options = url.parse(urlImagem);
  return new Promise(function (resolve, reject) {
    http.get(urlImagem, function (response) {
      var chunks = [];
      response.on('data', function (chunk) {
        chunks.push(chunk);
      }).on('end', function () {
        var buffer = Buffer.concat(chunks);
        resolve(sizeOf(buffer));
      });

    });
  })
};

module.exports = VideoCrowler;