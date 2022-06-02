const publiShema = require('../models/publi')


const publi = async (req,res) =>{

    const idPublicador = req.body.idPublicador
    const nomePublicador = req.body.nomePublicador
    const mensagemPost = req.body.mensagemPost

    const publiDB = new publiShema({
        idpublicador:idPublicador,
        name:nomePublicador,
        mensagem:mensagemPost
    })

    try {
        await publiDB.save()
        console.log('publi feita');
    } catch (error) {
        console.log(error);
    }
}

const allPublis = async (req,res) =>{
    publiShema.find({}, (err, result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

module.exports = {publi,allPublis}