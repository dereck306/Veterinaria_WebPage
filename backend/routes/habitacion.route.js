'use strict';
const express = require('express'); //importamos la dependencia express que permite atentar peticiones (req) y devolver repuestas (rest)
const router = express.Router();
const Habitacion = require('../models/habitacion.model');

router.post('/registrar-habitacion', (req, res) => {



    let habitacionNuevo = new Habitacion({
        "tipoDeHabitacion": req.body.tipoDeHabitacion,
        "tipoDeRaza": req.body.tipoDeRaza,
        "tipoDeEspecie": req.body.tipoDeEspecie,
        "fechaEntrada": req.body.fechaEntrada,
        "fechaSalida": req.body.fechaSalida,
        "CuidadosEspeciales": req.body.CuidadosEspeciales
    });

    habitacionNuevo.save(error => {
        if (error) {
            res.json({
                "msj": "La habitacion no fue registrada",
                error
            });
        } else {
            res.json({
                "msj": "La habitacion fue registrada exitosamente"
            });
        }
    });

});

router.get('/obtener-habitacion', (req, res) => {
    Habitacion.find((error, lista) => {
        if (error) {
            res.json({
                "msj": "No se pudo obtener las habitaciones",
                error
            });
        } else {
            res.json({
                "msj": "Se obtuvieron las habitaciones exitosamente",
                lista
            });
        }

    });

});
module.exports = router; //siempre debe ir al final, si no se coloca da error: "throw new typeError ('Router.use() requires a middleware function but got a ' + gettype(fn))"