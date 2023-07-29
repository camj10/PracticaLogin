const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const PersonSchema = new mongoose.Schema({
    nombre: {type: String},
    apellido: { type: String },
    email: { type: String },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlenght: [8, 'Password must be at 8 characters or longer']
    },
    doc: {type: Number},
    tel: {type: Number}
}, { timestamps: true });


// Validación de password, volver a escribir el password, pero no es necesario que sea otro campo aparte porque la contraseña ya tenemos y no es necesario guardarla en OTRO campo
PersonSchema.virtual('confirmPassword')
.get( () => this._confirmPassword )
.set( value => this._confirmPassword = value );
PersonSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});
PersonSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
        this.password = hash;
        next();
        });
});


module.exports.Person = mongoose.model('Person', PersonSchema);