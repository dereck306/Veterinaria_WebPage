'use strict'

const { default: mongoose } = require("mongoose")

const schemaObservaciones = new mongoose.Schema({
    idDueño: { type: Number, required: true },
    idMascota: { type: Number, required: true },
    reposo: { type: String, required: false },
    diasReposo: { type: Number, required: false },
    tipoAtencion: { type: String, required: true },
    vacunas: { type: String, required: true },
    alergias: { type: String, required: true },
    medicamentos: { type: String, required: true },
    diagnostico: { type: String, required: true }
});

module.exports = mongoose.model('Observaciones', schemaObservaciones, 'observaciones');