'use strict';
const mongoose = require('mongoose'); //guardar mongoose en una variable

const schemaMascota = new mongoose.Schema({
    nombre: { type: String, required: true },
    tipodeMascota: { type: String, required: true },
    tipodeRaza: { type: String, required: true },
    fechaNacimiento: { type: String, required: true },
    foto: { type: String, required: true },
    cuidados: { type: String, required: true },
    estado: { type: Number, required: true },
});


//estado 1 - activo, estado 2 - inactivo

module.exports = mongoose.model('Mascota', schemaMascota, 'mascotas');