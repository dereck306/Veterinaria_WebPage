// const inputNombre = document.getElementById('txt-nombre');
// const inputRaza = document.getElementById('txt-raza');
const selectServicio = document.getElementById('slt-servicio');
const selectComportamiento = document.getElementById('slt-comportamiento');
const selectCalificación = document.getElementById('slt-estrellas');
const btnCalificación = document.getElementById('btn-calificación');
const btnCancelar = document.getElementById('btn-cancelar');


const validar = () => {

    let error = false;

    if (selectServicio.value == '') {
        error = true;
        selectServicio.classList.add('input-error');
    } else {
        selectServicio.classList.remove('input-error');
    }

    if (selectComportamiento.value == '') {
        error = true;
        selectComportamiento.classList.add('input-error');
    } else {
        selectComportamiento.classList.remove('input-error');
    }

    if (selectCalificación.value == '') {
        error = true;
        selectCalificación.classList.add('input-error');
    } else {
        selectCalificación.classList.remove('input-error');
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
    let calificacion = {
        'selectServicio': selectServicio.value,
        'selectComportamiento': selectComportamiento.value,
        'selectCalificación': selectCalificación.value,
    };

    registrarDatos('registrar-califiacion', calificacion, 'registrar-calificacion-mascota.html')

};

btnCalificación.addEventListener('click', validar);

let refresh = document.getElementById('btn-cancelar');
refresh.addEventListener('click', _ => {
    location.reload();
})