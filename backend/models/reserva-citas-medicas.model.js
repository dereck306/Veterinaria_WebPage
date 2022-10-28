'use strict'

const { default: mongoose } = require("mongoose")

const schemaCitasMedicas = new mongoose.Schema({
    idDueno: { type: String, required: true },
    idMascota: { type: String, required: true },
    idMedico: { type: String, required: true },
    fecha: { type: String, required: true },
    hora: { type: String, required: true },
    sede: { type: String, required: true },
    comentarios: { type: String, required: true }
});

module.exports = mongoose.model('CitasMedicas', schemaCitasMedicas, 'citasMedicas');