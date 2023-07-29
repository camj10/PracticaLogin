const Usuario = require('../models/usuario');

const getUserById = async(req, res)=>{
    const { userId } = req.params;

    if(userId.length === 24){
        Usuario.findById(userId).then((usuario)=>{
            if(!usuario){
                return res.json({mesnaje: "Usuario no encontrado"})
            }else{
                const{_id, contraseña, _id_v, ...resto} = usuario._doc;
                res.json(resto); 
            }
        });
    } else{
        res.json({mensaje: "Estas ingresando una contraseña incorrecta"});
    }
};
module.exports = getUserById