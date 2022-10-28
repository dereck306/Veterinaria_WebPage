const inputDate = document.getElementById('inpDate');
const inputTime = document.getElementById('inpTime');
const inputSede = document.getElementById('inpSede');
const btnSiguiente = document.getElementById('btnSiguiente');

const validacion = () => {
    let error = false;

    if (inputDate.value == '') {
        error = true;
        inputDate.classList.add('resaltar-rojo');
    } else {
        inputDate.classList.remove('resaltar-rojo');
    }


    if (inputTime.value == '') {
        error = true;
        inputTime.classList.add('resaltar-rojo');
    } else {
        inputTime.classList.remove('resaltar-rojo');
    }

    if (inputSede.value == '') {
        error = true;
        inputSede.classList.add('resaltar-rojo');
    } else {
        inputSede.classList.remove('resaltar-rojo');
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
        Swal.fire({
            'icon': 'success',
            'title': 'Datos ingresados correctamente',
            'text': 'Cita registrada',
            'confirmButtonText': 'Entendido'

        });


    };
};

btnSiguiente.addEventListener('click', validacion);