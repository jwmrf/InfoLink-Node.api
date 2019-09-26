'use strict';
var request = require('request');
var jQuery = require('cheerio');
var sizeOf = require('image-size');
var url = require('url');
var http = require('https');
const linkSchema = require('../schemas/linksSchema');
const mongoose = require('mongoose');
mongoose.connect('mongodb://admin:arkantos2008@ds255107.mlab.com:55107/info-link', { useNewUrlParser: true })

class VideoCrowler {
  constructor() {
    this._id = ""
  }

  //Método inicial que recebe a url do website.
  async start(req, res) {

    this._id = await linkSchema(req);

    console.log("Entrou na start");
    var retorno = await this.PegaImagens(req);
    return retorno;
  }

  //Responsável por verificar se o SRC da tag imagem é um endereço http.
  TrataUrl(url) {
    return new Promise(function (resolve, reject) {
      if (url == undefined) {
        resolve(-1);
      }
      let verificaHttp = url.search("http");
      resolve(verificaHttp);
    });
  }

  Requesta(site) {
    return new Promise(function (resolve, reject) {
      let lista = [];
      let listaVertical = [];
      let maior = 0;
      let numero = site('img').length;
      if (undefined == site('img').last().attr('src')) {
        listaVertical, lista.unshift("Erro, tente outra url");
      }
      if (numero == 0) {
        resolve(lista[0])
      }


      site('img').each(async function (index, value) {
        var imagem = site(this);
        let verifica = await new VideoCrowler().TrataUrl(imagem.attr('src'));
        if (verifica >= 0) {
          var tamanho = await new VideoCrowler().PegaTamanho(imagem.attr('src'));
          if (tamanho != undefined) {
            if (tamanho.width > tamanho.height && tamanho.type != 'gif') {
              if (tamanho.width * tamanho.height > maior) {
                maior = tamanho.width * tamanho.height;
                lista.unshift(imagem.attr('src'));
              }
            } else if (tamanho.width < tamanho.height && tamanho.type != 'gif') {
              listaVertical.unshift(imagem.attr('src'));
            }
          }
        }
        // Quando a imagem do 'Each' for a última da página, ele dispara o timer de 2 segundos para retorno
        if (imagem.attr('src') == site('img').last().attr('src') && numero == index + 1) {
          setTimeout(async function () {
            //linkSchema("teste", this._id, lista[0]);
            if (lista[0] != "Erro, tente outra url") {
              resolve(lista[0]);
            } else {
              resolve(listaVertical[0]);
            }
          }, 1000);
        }
      });
    });
  }

  PegaImagens(url) {
    return new Promise(async function (resolve, reject) {
      let verifica = await new VideoCrowler().TrataUrl(url);
      if (verifica >= 0) {

        request({ method: 'GET', url: url, headers: { 'User-Agent': 'curl/7.47.0' } }, async function (erro, resposta, body) {
          if (erro) {
            resolve("Erro, tente outra url");
            console.log(erro);
          } else {
            var site = jQuery.load(body);
            var maiorImagem = await new VideoCrowler().Requesta(site);
            resolve(maiorImagem);
          }
        });
      } else {
        resolve("Erro, tente outra url");
      }
    });
  }

  //Utilizi a biblioteca Image-size, dando get no endereço da imagem e retornando suas propriedades.
  PegaTamanho(urlImagem) {
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
}
module.exports = VideoCrowler;