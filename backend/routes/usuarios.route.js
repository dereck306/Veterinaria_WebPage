 const { json } = require('body-parser');
 const express = require('express'); //importamos la dependecia exptress que permite ayender peticiones  (req) y devolver respuestas (res)
 //const { model } = require('mongoose');
 const router = express.Router();
 const UsuariosAdmin = require('../models/usuarios.model');

 router.post('/registrar-usuarios-admin', (req, res) => {
     let nuevoUsuarioAdmin = new UsuariosAdmin({
         tipoUsuario: req.body.tipoUsuario,
         genero: req.body.genero,
         nombre: req.body.nombre,
         apellidos: req.body.apellidos,
         telefono: req.body.telefono,
         cedula: req.body.cedula,
         direccion: req.body.direccion,
         nombreUsuario: req.body.nombreUsuario,
         contrasenna: req.body.contrasenna,
         estado: 1
     });
     nuevoUsuarioAdmin.save((error) => {
         if (error) {
             res.json({
                 msj: 'Ocurrio un error al registrar el usuario',
                 error
             });
         } else {
             res.json({
                 msj: 'El susuario se tregistro exitosamente'
             });
         }
     });
 });


 router.get('/obtener-usuarios-admin', (req, res) => {
     UsuariosAdmin.find((error, lista) => {
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