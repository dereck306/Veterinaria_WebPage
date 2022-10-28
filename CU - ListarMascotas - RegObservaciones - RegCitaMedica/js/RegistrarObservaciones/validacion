const inputDias = document.getElementById('inpDias');
const inputTipo = document.getElementById('inpTipo');
const inputVacunas = document.getElementById('inpVacunas');
const inputAlergias = document.getElementById('inpAlergias');
const inputMedicamentos = document.getElementById('inpMedicamentos');
const inputDiagnostico = document.getElementById('inpDiagnostico');
const btnActualizar = document.getElementById("btnActualizar")

const validacion = () => {
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
        Swal.fire({
            'icon': 'success',
            'title': 'Datos ingresados correctamente',
            'text': 'Cita registrada',
            'confirmButtonText': 'Entendido'

        });


    };
};

btnActualizar.addEventListener('click', validacion);