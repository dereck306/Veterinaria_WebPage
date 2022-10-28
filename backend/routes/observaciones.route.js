'use strict'
const express = require('express');
const router = express.Router();
const Observaciones = require('../models/registros-observaciones.model')

router.post('/registrar-observacion-medica', (req, res) => {
    let nuevaObservacion = new Observaciones({
        idDueño: req.body.idDueño,
        idMascota: req.body.idMascota,
        reposo: req.body.reposo,
        diasReposo: req.body.diasReposo,
        tipoAtencion: req.body.tipoAtencion,
        vacunas: req.body.vacunas,
        alergias: req.body.alergias,
        medicamentos: req.body.medicamentos,
        diagnostico: req.body.diagnostico
    });

    nuevaObservacion.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al registrar el usuario',
                error
            });
        } else {
            res.json({
                msj: 'El usuario se registró exitosamente',
            });
        }
    });
});

module.exports = router;