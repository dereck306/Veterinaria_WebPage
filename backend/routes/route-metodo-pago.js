const express = require('express'); //Importamos la dependencia express que permite atender peticiones (req) y devolver respuestas (res)
const router = express.Router();
const Tarjeta = require('../models/model-metodo-pago');

router.post('/registrar-tarjeta', (req, res) => {
    // Obtener los datos que vienen en el cuerpo de la peticion
    // let nombre = req.body.nombre;
    // let correo = req.body.correo;
    // let genero = req.body.genero;

    // console.log('Nombre: ' + nombre);
    // console.log('Correo: ' + correo);
    // console.log('Genero: ' + genero);

    let tarjetaNueva = new Tarjeta({
        "nombre": req.body.nombre,
        "inputNúmeroDeTarjeta": req.body.inputNúmeroDeTarjeta,
        "inputFechaDeVencimiento": req.body.inputFechaDeVencimiento,
        "inputCódigoDeSeguridad": req.body.inputCódigoDeSeguridad,
        "selectTarjeta": req.body.selectTarjeta,
        "estado": 'Activo'
    });

    tarjetaNueva.save(error => {
        if (error) {
            res.json({
                "msj": 'La tarjeta no se pudo registrar',
                error
            })
        } else {
            res.json({
                "msj": 'Tarjeta registrada correctamente'
            })
        }
    });

});

router.get('/listar-tarjetas', (req, res) => {
    Tarjeta.find((error, lista) => {
        if (error) {
            res.json({
                "msj": 'Las tarjetas no se pudieron registrar',
                error
            })
        } else {
            res.json({
                "msj": 'Las tarjetas se registraron correctamente',
                lista
            })
        }
    });
});

router.delete('/eliminar-tarjeta', (req, res) => {
    Tarjeta.deleteOne({ _id: req.body._id }, error => {
        if (error) {
            res.json({
                "msj": 'La tarjeta no se pudo eliminar',
                error
            })
        } else {
            res.json({
                "msj": 'Tarjeta eliminada correctamente',
            })
        }
    });
});

module.exports = router; //Siempre debe de ir al final, si no se coloca da error de middleware