//eschema - esqueleto
const mongoose = require('mongoose'); //guardar mongoose en una variable
const schemaAgregarUsuarioAdmin = new mongoose.Schema({

    "tipoUsuario": { type: String, required: true },
    "genero": { type: String, required: true },
    "nombre": { type: String, required: true },
    "apellidos": { type: String, required: true },
    "telefono": { type: Number, required: true },
    "cedula": { type: Number, required: true, unique: true },
    "direccion": { type: String, required: true },
    "nombreUsuario": { type: String, required: true, unique: true }, //unique: true, propiedad para cosas que no se pueden repetir
    "contrasenna": { type: String, required: true },
    "estado": { type: Number, required: true }

});

let modeloUsuariosAdmin = mongoose.model('UsuariosAdmin', schemaAgregarUsuarioAdmin, 'usuariosAdmin');

module.exports = modeloUsuariosAdmin;


//estado
// 1-->Activo
// 2-->Inactivo