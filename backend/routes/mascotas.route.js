'use strict';
const express = require('express');
const router = express.Router();
const Mascota = require('../models/mascotas.model');

router.post('/registrar-mascota', (req, res) => {
    let nuevoMascota = new Mascota({
        nombre: req.body.nombre,
        tipodeMascota: req.body.tipodeMascota,
        tipodeRaza: req.body.tipodeRaza,
        fechaNacimiento: req.body.fechaNacimiento,
        foto: req.body.foto,
        cuidados: req.body.cuidados,
        estado: 1
    });

    nuevoMascota.save((error) => {
        if (error) {
            res.json({
                msj: 'Error al registrar la mascota',
                error
            });
        } else {
            res.json({
                msj: 'Mascota registrada correctamente'
            });
        }


    });
});

router.get('/obtener-mascotas', (req, res) => {
    Mascota.find((error, lista) => {
        if (error) {
            res.json({
                "msj": "Los usuarios no se oudieron listar",
                error
            });
        } else {
            res.json({
                "msj": "Usuarios listados correctamente",
                lista
            });
        }
    });
});

router.put('/actualizar-mascota', (req, res) => {});

router.delete('/eliminar-mascota', (req, res) => {});

module.exports = router;