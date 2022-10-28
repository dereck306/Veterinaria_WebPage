'use strict';
const mongoose = require('mongoose');

const  schemaHabitacion = mongoose.Schema({
    "tipoDeHabitacion" : {type: String, required: true },
    "tipoDeRaza" : {type: String, required: true },
    "tipoDeEspecie" : {type: String, required: true },
    "fechaEntrada" : {type: String, required: true },
    "fechaSalida" : {type: String, required: true },
    "CuidadosEspeciales" : {type: String, required: false }
});

let modelo = mongoose.model('Habitacion', schemaHabitacion, 'habitacion');

module.exports = modelo;