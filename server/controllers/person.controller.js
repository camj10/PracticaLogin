const { Person } = require("../models/person.model");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createPerson = async (request, response) => {
    try {
        const { nombre, apellido, email, password, confirmPassword, doc, tel } = request.body;
        persona = await Person.create({
            nombre,
            apellido,
            email,
            password,
            confirmPassword,
            doc,
            tel
        });
        response.json(persona);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}
module.exports.login = async (request, response) => {
    console.log("Informacion que ingresa al login",request.params)
    try {
        const {email, password} = request.body;
        console.log("Ingresa al try")
        console.log(request.body)
        const persona = await Person.findOne({email: email})
        console.log("persona= ",persona)
        if (persona === null) {
            console.log("persona===null")
            return  response.status(403).json({ msg: "correo no encontrado" });
        }
        const esValidaLaPass = await bcrypt.compare(password, persona.password);

        if (esValidaLaPass){
            console.log("esValidaLaPass positivo")
            // const secret = process.env.SECRET_KEY;
            const secret = 'keepThisSecret'
            const newJWT = jwt.sign({
                _id: persona._id,
                email: persona.email
            }, secret )
            console.log("paso la asignacion de newJWT")
            response.cookie("sesion_token", newJWT, {
                httpOnly: true
            })
            console.log("paso response.token")
            response.json({msg: "Logeado Correctamente"});
            console.log("logeado correctamente")
        }
        else
            return  response.status(403).json({ msg: "Clave incorrecta" });

        //response.cookie("sesion_token", "valor de la cookie", { httpOnly: true })
    } catch (error) {
        console.log("Ingresa al catch de person.controller")
        response.status(400);
        response.json(error);
    }
}