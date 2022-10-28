// JavaScript Document
'use strict';

function validateForm(pForm) {
    let pFormulario = document.getElementById(pForm);
    let estatus = true;
    let msg = document.getElementById("msg");
    msg.innerHTML = "";
    if (pFormulario.pEspecie.value == "") {
        msg.innerHTML = `${msg.innerHTML} - El campo de tipo de especie está vacío.<br/>`;
        pFormulario.pEspecie.style = "border: 1px solid #ff0000";
        estatus = false;
    } else {
        pFormulario.pEspecie.style = "border: 1px solid green";
    }
    if (pFormulario.pHabitacion.value == "0") {
        msg.innerHTML = `${msg.innerHTML} - El campo de la habitación no está seleccionada.<br/>`;
        pFormulario.pHabitacion.style = "border: 1px solid #ff0000";
        estatus = false;
    } else {
        pFormulario.pHabitacion.style = "border: 1px solid green";
    }
    if (pFormulario.pRaza.value == "") {
        msg.innerHTML = `${msg.innerHTML} - El campo de raza está vacío.<br/>`;
        pFormulario.pRaza.style = "border: 1px solid #ff0000";
        estatus = false;
    } else {
        pFormulario.pRaza.style = "border: 1px solid green";
    }

    if (pFormulario.pComentario.value == "") {
        msg.innerHTML = `${msg.innerHTML} - El campo del comentario está vacío.<br/>`;
        pFormulario.pComentario.style = "border: 1px solid #ff0000";
        estatus = false;
    } else {
        pFormulario.pComentario.style = "border: 1px solid green";
    }
    if (pFormulario.fechaEn.value == "") {
        msg.innerHTML = `${msg.innerHTML} - El campo de la fecha de entrada está vacío.<br/>`;
        pFormulario.fechaEn.style = "border: 1px solid #ff0000";
        estatus = false;
    } else {
        pFormulario.fechaEn.style = "border: 1px solid green";
    }
    if (pFormulario.fechaSa.value == "") {
        msg.innerHTML = `${msg.innerHTML} - El campo de fecha de salida está vacío.<br/>`;
        pFormulario.fechaSa.style = "border: 1px solid #ff0000";
        estatus = false;
    } else {
        pFormulario.fechaSa.style = "border: 1px solid green";
    }

    if (estatus == false) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Existen campos inválidos o vacíos"
        })
    } else {

        let habitacion = {

            tipoDeHabitacion: pFormulario.pHabitacion.value,
            tipoDeRaza: pFormulario.pRaza.value,
            tipoDeEspecie: pFormulario.pEspecie.value,
            fechaEntrada: pFormulario.fechaEn.value,
            fechaSalida: pFormulario.fechaSa.value,
            CuidadosEspeciales: pFormulario.pComentario.value
        };

        registarDatos(habitacion, '/registrar-habitacion');

        Swal.fire({
            icon: 'success',
            title: 'Registro exitoso!',
            text: 'Se ha registrado su habitacion!',
        });
    }
    return estatus;

}