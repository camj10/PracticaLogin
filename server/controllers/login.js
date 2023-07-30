const bcrypt = require("bcrypt");
const Usuario = require("../model/usuario");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { correo, contraseña } = req.body;

  Usuario.findOneAndUpdate({ correo }).then((usuario) => {
    if (!usuario) {
      return res.json({ mensaje: "Usuario no encontrado" });
    }

    bcrypt.compare(contraseña, usuario.contraseña).then((esCorrecta) => {
      if (esCorrecta) {
        const { id, nombre, ultHora } = usuario;

        const data = {
          id,
          nombre,
        };
        date = new Date();
        var now = date.toLocaleTimeString('en-PY');
        usuario.ultHora = now;
        usuario.save();
        const token = jwt.sign(data, "secreto", {
          expiresIn: 86400 /* 24hs */,
        });
        res.json({
          mensaje: "Usuario logeado correctamente",
          usuario: {
            id,
            nombre,
            ultHora,
            token,
          },
        });
      } else {
        return res.json({ mensaje: "Contraseña incorrecta" });
      }
    });
  });
};

module.exports = login;
