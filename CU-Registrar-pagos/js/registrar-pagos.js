const inputNombre = document.getElementById('txt-nombre');
const inputNúmeroDeTarjeta = document.getElementById('txt-ndt');
const selectTarjeta = document.getElementById('slt-tarjeta');
const inputFechaDeVencimiento = document.getElementById('txt-fdv');
const inputCódigoDeSeguridad = document.getElementById('txt-cds');
const btnGuardar = document.getElementById('btn-guardar');
const btnCancelar = document.getElementById('btn-cancelar');

const validar = () => {

    let error = false;

    if (inputNombre.value == '') {
        error = true;
        inputNombre.classList.add('input-error');
    } else {
        inputNombre.classList.remove('input-error');
    }

    if (inputNúmeroDeTarjeta.value == '') {
        error = true;
        inputNúmeroDeTarjeta.classList.add('input-error');
    } else {
        inputNúmeroDeTarjeta.classList.remove('input-error');
    }

    if (selectTarjeta.value == '') {
        error = true;
        selectTarjeta.classList.add('input-error');
    } else {
        selectTarjeta.classList.remove('input-error');
    }

    if (inputFechaDeVencimiento.value == '') {
        error = true;
        inputFechaDeVencimiento.classList.add('input-error');
    } else {
        inputFechaDeVencimiento.classList.remove('input-error');
    }

    if (inputCódigoDeSeguridad.value == '') {
        error = true;
        inputCódigoDeSeguridad.classList.add('input-error');
    } else {
        inputCódigoDeSeguridad.classList.remove('input-error');
    }

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Datos ingresados incorrectamente',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    } else {
        obtenerDatos();
    }

};

const obtenerDatos = () => {

    let tarjeta = {
        'nombre': inputNombre.value,
        'inputNúmeroDeTarjeta': inputNúmeroDeTarjeta.value,
        'inputFechaDeVencimiento': inputFechaDeVencimiento.value,
        'inputCódigoDeSeguridad': inputCódigoDeSeguridad.value,
        'selectTarjeta': selectTarjeta.value,
        'estado': ''
    };

    registrarDatos('registrar-tarjeta', tarjeta, 'listar-tarjetas.html');

};

btnGuardar.addEventListener('click', validar);

let refresh = document.getElementById('btn-cancelar');
refresh.addEventListener('click', _ => {
    location.reload();
})