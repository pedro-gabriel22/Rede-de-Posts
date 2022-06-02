const mongoose = require('mongoose')

const publiShema = new mongoose.Schema({
    idpublicador:{type:String},
    name:{type:String},
    mensagem:{type:String, required:true, minlength:1, maxlength:500}
    
})

const ShemaPubli = mongoose.model('Publicações', publiShema)
module.exports = ShemaPubli