'use strict';

const mongoose = require('mongoose');
const schema = mongoose.Schema;

async function Inserir(url, update = "", imagem = "") {
    console.log("")
    if (update == "") {
        /*
const linkModel = new schema({
  url: {trim: true, index: true, required: true, type: String} ,
  imagem: {required: false, type: String} ,
  dataCriacao: {type: Date,default: Date.now}
},{ versionKey: false});
mongoose.model('teste3', linkModel);
const data = mongoose.model('teste3')
var id = await new data ({
    url: url,
    dataCriacao: new Date(),
  }).save().then((res) => {
      console.log(" INSERIU POW <3 <3 ")
      return res._id
  }).catch((error) => {
    return ""
    console.log(" pow vei n deu ")
  })
  if(id != ""){
      return id
  } */
    } else {
        //const data = mongoose.model('teste3')
        //console.log(data.find())
        // data.findByIdAndUpdate(update,{$set: {
        //     imagem : imagem
        // }})
        //let resultado = await this._model.findById(id);
        //return "";
    }

}


module.exports = Inserir;