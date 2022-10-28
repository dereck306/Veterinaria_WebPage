'use strict'
const express = require('express');
const router = express.Router();
const CitasMedicas = require('../models/reserva-citas-medicas.model')

router.post('/reservar-cita-medica', (req, res) => {
    let nuevaCita = new CitasMedicas({
        idDueno: req.body.idDueno,
        idMascota: req.body.idMascota,
        idMedico: req.body.idMedico,
        fecha: req.body.fecha,
        hora: req.body.hora,
        sede: req.body.sede,
        comentarios: req.body.comentarios
    });

    nuevaCita.save((error) => {
        if (error) {
            res.json({
                msj: 'Ocurrió un error al reservar la cita',
                error
            });
        } else {
            res.json({
                msj: 'La cita se reservó exitosamente',
            });
        }
    });
});



router.get('/obtener-cita-medica', (req, res) => {
    CitasMedicas.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'no se pudo consultar el listado',
                error
            });
        } else {
            res.json({
                msj: 'usuarios listados correctamente',
                lista
            });
        }
    });

});

router.put('/obtener-usuarios-admin', (req, res) => {});

router.delete('/obtener-usuarios-admin', (req, res) => {});

module.exports = router;