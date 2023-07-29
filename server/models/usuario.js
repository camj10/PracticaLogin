const { model, Schema } = require("mongoose");
const UsuarioSchema = new Schema({
    nombre: {type: String, required: true},
    correo: { type: String, required: true, unique: true},
    contraseña: {
        type: String,
        required: [true, "Password is required"],
        minlenght: [8, 'Password must be at 8 characters or longer']
    }
}, { timestamps: true });

module.exports = model('Usuario', UsuarioSchema); 