const { model, Schema } = require("mongoose");
const UsuarioSchema = new Schema({
    nombre: {type: String, required: true},
    correo: { type: String, required: true, unique: true},
    contraseña: {
        type: String,
        required: [true, "Password is required"],
    },
    ultHora:{ type:String,},
}, { timestamps: true });

module.exports = model('Usuario', UsuarioSchema); 