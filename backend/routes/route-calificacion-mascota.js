const express = require('express'); //Importamos la dependencia express que permite atender peticiones (req) y devolver respuestas (res)
const router = express.Router();
const Calificacion = require('../models/model-calificacion-mascota');

router.post('/registrar-califiacion', (req, res) => {
    // Obtener los datos que vienen en el cuerpo de la peticion
    // let nombre = req.body.nombre;
    // let correo = req.body.correo;
    // let genero = req.body.genero;

    // console.log('Nombre: ' + nombre);
    // console.log('Correo: ' + correo);
    // console.log('Genero: ' + genero);

    let calificacionNueva = new Calificacion({
        "selectServicio": req.body.selectServicio,
        "selectComportamiento": req.body.selectComportamiento,
        "selectCalificación": req.body.selectCalificación
    });

    calificacionNueva.save(error => {
        if (error) {
            res.json({
                "msj": 'La calificación de la mascota no se pudo registrar',
                error
            })
        } else {
            res.json({
                "msj": 'Calificación de la mascota registrada correctamente'
            })
        }
    });

});

router.get('/listar-calificacion', (req, res) => {
    Calificacion.find((error, lista) => {
        if (error) {
            res.json({
                "msj": 'Las calificaciónes de las mascotas no se pudieron registrar',
                error
            })
        } else {
            res.json({
                "msj": 'Las calificaciónes de las mascotas se registraron correctamente',
                lista
            })
        }
    });
});

router.delete('/eliminar-calificacion', (req, res) => {
    Calificacion.deleteOne({ _id: req.body._id }, error => {
        if (error) {
            res.json({
                "msj": 'La calificación de la mascota no se pudo eliminar',
                error
            })
        } else {
            res.json({
                "msj": 'Calificación de la mascota eliminada correctamente',
            })
        }
    });
});

module.exports = router; //Siempre debe de ir al final, si no se coloca da error de middleware