'use strict'

const cuerpoTabla = document.querySelector('#listado-mascotas tbody')
let listaMascotas = [];

const inicializarListas = async() => {
    listaMascotas = await obtenerListaDatos('/obtener-mascota');
    mostrarTabla();
};

const mostrarTabla = async() => {
    cuerpoTabla.innerHTML = '';
    listaMascotas.forEach(mascota => {
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().innerText = mascota.idMascota;
        fila.insertCell().innerText = mascota.nombre;
        fila.insertCell().innerText = mascota.edad;
        fila.insertCell().innerText = mascota.Genero;
        fila.insertCell().innerText = mascota.Estrellas;
    });
};


inicializarListas();