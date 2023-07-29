const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');

const register = async(req, res)=>{
    const{ nombre, correo, contraseña } = req.body;
    Usuario.findOne({ correo}).then((usuario)=>{
    if(usuario){
        return res.json({mensaje: 'Ya existe un usuario con ese correo'});
    } else if(!nombre || !correo || !contraseña){
        return res.json({mensaje: 'Falta nombre / correo / contraseña'});
    } else{
        bcrypt.hash(contraseña, 10, (error, contraseñahasheada) =>{
            if(error) res.json({error});
            else{
                const nuevoUsuario = new Usuario({
                    nombre,
                    correo,
                    contraseña: contraseñahasheada,
                });

                nuevoUsuario
                    .save()
                    .then((usuario) => {
                        res.json({ mensaje:"Usuario creado correctamente",usuario });
                    })
                    .catch((error) => console.error(error));
                }
        });
    }
    });

};
module.exports = register