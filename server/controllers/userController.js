const usuarioModel = require('../models/usuario')
const bcrypt = require('bcryptjs')


const  register = async (req,res) => {

    const selecionarUsuario = await usuarioModel.findOne({email:req.body.campoEmail})
    if(selecionarUsuario){
        res.status(400).send('email já cadastrado');
    } else{


        
        const campoNome = req.body.campoNome
        const campoEmail = req.body.campoEmail
        

        const usuarioDB = new usuarioModel(
            { name:campoNome,
              email:campoEmail,
              senha:bcrypt.hashSync(req.body.campoSenha)  
            }
            )
        
        try {
            await usuarioDB.save()
            console.log('inserido com suceso');
        } catch (error) {
            console.log(error);
        }
    }
    

    }


    const login = async (req,res) =>{
        
        const selecionarUsuario = await usuarioModel.findOne({email:req.body.campoEmail})
         
        if(!selecionarUsuario) return  res.send('email ou senha incorretas')
            const validarsenha = bcrypt.compareSync(req.body.campoSenha, selecionarUsuario.senha)
            
            if(!validarsenha) return res.send('email ou senha incorretas')
                
                res.send({id:selecionarUsuario.id,nome:selecionarUsuario.name})
                
        
    }

module.exports = {register,login}