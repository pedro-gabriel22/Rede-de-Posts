const mongoose = require('mongoose')

const usuarioShema = new mongoose.Schema({
    name:{type:String, required:true, maxlength:50},
    email:{type:String, required:true, maxlength:100},
    senha:{type:String, required:true, minlength:6}
})
// mogoose.model( 'esse é o nome que vai aparecer no banco ' )
const Shemausuario = mongoose.model('Usuario', usuarioShema)
module.exports = Shemausuario               