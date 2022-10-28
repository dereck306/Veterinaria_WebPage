'use strict';

const inputDias = document.querySelector('#inpDias');
const inputTipo = document.querySelector('#inpTipo');
const inputVacunas = document.querySelector('#inpVacunas');
const inputAlergias = document.querySelector('#inpAlergias');
const inputMedicamentos = document.querySelector('#inpMedicamentos');
const inputDiagnostico = document.querySelector('#pComentario');

const botonGuardar = document.querySelector('#btnGuardar')

const validar = () => {

    let error = false;

    if (inputDias.value == '') {
        error = true;
        inputDias.classList.add('resaltar-rojo');
    } else {
        inputDias.classList.remove('resaltar-rojo');
    }


    if (inputTipo.value == '') {
        error = true;
        inputTipo.classList.add('resaltar-rojo');
    } else {
        inputTipo.classList.remove('resaltar-rojo');
    }

    if (inputVacunas.value == '') {
        error = true;
        inputVacunas.classList.add('resaltar-rojo');
    } else {
        inputVacunas.classList.remove('resaltar-rojo');
    }

    if (inputAlergias.value == '') {
        error = true;
        inputAlergias.classList.add('resaltar-rojo');
    } else {
        inputAlergias.classList.remove('resaltar-rojo');
    }

    if (inputMedicamentos.value == '') {
        error = true;
        inputMedicamentos.classList.add('resaltar-rojo');
    } else {
        inputMedicamentos.classList.remove('resaltar-rojo');
    }

    if (inputDiagnostico.value == '') {
        error = true;
        inputDiagnostico.classList.add('resaltar-rojo');
    } else {
        inputDiagnostico.classList.remove('resaltar-rojo');
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
        let observacion = {
            idDueño: 1,
            idMascota: 3,
            diasReposo: inputDias.value,
            tipoAtencion: inputTipo.value,
            vacunas: inputVacunas.value,
            alergias: inputAlergias.value,
            medicamentos: inputMedicamentos.value,
            diagnostico: inputDiagnostico.value

        };

        registrarDatos(observacion, '/registrar-observacion-medica');

        Swal.fire({
            'icon': 'success',
            'title': 'Datos ingresados correctamente',
            'text': 'Cita registrada',
            'confirmButtonText': 'Entendido'

        });


    };






};


botonGuardar.addEventListener('click', validar);