const mongoose = require('mongoose');

const schemaUsuario = mongoose.Schema({

    //Las comillas son opcionales "" "nombre" o nombre

    nombre: { type: String, required: true },
    inputNúmeroDeTarjeta: { type: String, required: true },
    inputFechaDeVencimiento: { type: String, required: true },
    inputCódigoDeSeguridad: { type: String, required: true },
    selectTarjeta: { type: String, required: true },
    estado: { type: String }

});

let modelo = mongoose.model('Tarjeta', schemaUsuario, 'tarjetas');

module.exports = modelo;