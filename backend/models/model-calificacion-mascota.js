const mongoose = require('mongoose');

const schemaUsuario = mongoose.Schema({

    //Las comillas son opcionales "" "nombre" o nombre

    selectServicio: { type: String, required: true },
    selectComportamiento: { type: String, required: true },
    selectCalificación: { type: String, required: true }

});

let modelo = mongoose.model('calificacion', schemaUsuario, 'calificaciones');

module.exports = modelo;