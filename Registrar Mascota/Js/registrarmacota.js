'use strict';
const inputNombre = document.querySelector('#pNombre');
const inputMascota = document.querySelector('#pHabitacion');
const inputRaza = document.querySelector('#pRaza');
const inputNacimiento = document.querySelector('#fechaEn');
const inputFoto = document.querySelector('#fechaSa');
const inputCuidados = document.querySelector('#pComentario');
const botonRegistrar = document.querySelector('#submit');


const validar = () => {
    let error = false;
    if (inputNombre.value == '') {
        inputNombre.classList.add('input-error');
        inputNombre.style.border = '2px solid';
        inputNombre.style.borderColor = 'red';
        error = true;

    } else {
        inputNombre.classList.remove('input-error');
        inputNombre.style.border = '2px solid';
        inputNombre.style.borderColor = 'green';
    }
    if (inputMascota.value == '' || inputMascota.value == "0") {
        inputMascota.classList.add('input-error');
        inputMascota.style.border = '2px solid';
        inputMascota.style.borderColor = 'red';
        error = true;

    } else {
        inputMascota.classList.remove('input-error');
        inputMascota.style.border = '2px solid';
        inputMascota.style.borderColor = 'green';
    }
    if (inputRaza.value == '') {
        inputRaza.classList.add('input-error');
        inputRaza.style.border = '2px solid';
        inputRaza.style.borderColor = 'red';
        error = true;

    } else {
        inputRaza.classList.remove('input-error');
        inputRaza.style.border = '2px solid';
        inputRaza.style.borderColor = 'green';
    }
    if (inputNacimiento.value == '') {
        inputNacimiento.classList.add('input-error');
        inputNacimiento.style.border = '2px solid';
        inputNacimiento.style.borderColor = 'red';
        error = true;

    } else {
        inputNacimiento.classList.remove('input-error');
        inputNacimiento.style.border = '2px solid';
        inputNacimiento.style.borderColor = 'green';
    }
    if (inputFoto.value == '') {
        inputFoto.classList.add('input-error');
        inputFoto.style.border = '2px solid';
        inputFoto.style.borderColor = 'red';
        error = true;

    } else {
        inputFoto.classList.remove('input-error');
        inputFoto.style.border = '2px solid';
        inputFoto.style.borderColor = 'green';
    }
    if (inputCuidados.value == '') {
        inputCuidados.classList.add('input-error');
        inputCuidados.style.border = '2px solid';
        inputCuidados.style.borderColor = 'red';
        error = true;

    } else {
        inputCuidados.classList.remove('input-error');
        inputCuidados.style.border = '2px solid';
        inputCuidados.style.borderColor = 'green';
    }

    if (error == true) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se ha registrado su mascota!',
        });

    } else {


        let mascota = {
            nombre: inputNombre.value,
            tipodeMascota: inputMascota.value,
            tipodeRaza: inputRaza.value,
            fechaNacimiento: inputNacimiento.value,
            foto: inputFoto.value,
            cuidados: inputCuidados.value,
        };

        registarDatos(mascota, '/registrar-mascota');

        Swal.fire({
            icon: 'success',
            title: 'Registro exitoso!',
            text: 'Se ha registrado su mascota!',
        });
    }


};

botonRegistrar.addEventListener('click', validar);