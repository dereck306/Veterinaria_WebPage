'use strict';
const sltDueno = document.querySelector('#sltDueno');
const sltMascota = document.querySelector('#sltMascota');
const inpFecha = document.querySelector('#inpFecha');
const inpHora = document.querySelector('#inpHora');
const sltSede = document.querySelector('#sltSede');
const sltDoctor = document.querySelector('#sltDoctor');
const pComentario = document.querySelector('#pComentario');

const botonGuardar = document.querySelector('#btnGuardar')

const validar = () => {

    let error = false;

    if (sltDueno.value == 0) {
        error = true;
        sltDueno.classList.add('resaltar-rojo');
    } else {
        sltDueno.classList.remove('resaltar-rojo');
    }


    if (sltMascota.value == 0) {
        error = true;
        sltMascota.classList.add('resaltar-rojo');
    } else {
        sltMascota.classList.remove('resaltar-rojo');
    }

    if (inpFecha.value == '') {
        error = true;
        inpFecha.classList.add('resaltar-rojo');
    } else {
        inpFecha.classList.remove('resaltar-rojo');
    }

    if (inpHora.value == '') {
        error = true;
        inpHora.classList.add('resaltar-rojo');
    } else {
        inpHora.classList.remove('resaltar-rojo');
    }

    if (sltSede.value == 0) {
        error = true;
        sltSede.classList.add('resaltar-rojo');
    } else {
        sltSede.classList.remove('resaltar-rojo');
    }

    if (sltDoctor.value == 0) {
        error = true;
        sltDoctor.classList.add('resaltar-rojo');
    } else {
        sltDoctor.classList.remove('resaltar-rojo');
    }

    if (error == true) {
        /*console.log('Advertencia: Porfavor revise los campos resaltados')*/
        Swal.fire({
            'icon': 'warning',
            'title': 'Datos ingresados incorrectamente',
            'text': 'Por favor verificar los datos ingresados',
            'confirmButtonText': 'Entendido'
        });

    } else {
        let citas = {
            idDueno: sltDueno.value,
            idMascota: sltMascota.value,
            idMedico: sltDoctor.value,
            fecha: inpFecha.value,
            hora: inpHora.value,
            sede: sltSede.value,
            comentarios: pComentario.value

        };

        registrarDatos(citas, '/reservar-cita-medica');

        Swal.fire({
            'icon': 'success',
            'title': 'Datos ingresados correctamente',
            'text': 'Cita registrada',
            'confirmButtonText': 'Entendido'

        });


    };






};

botonGuardar.addEventListener('click', validar);