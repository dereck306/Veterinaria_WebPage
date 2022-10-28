//const inputTipo = document.getElementById('tipo-usuario');
const inputnombre = document.getElementById('nombre');
const inputApellidos = document.getElementById('apellidos');
const inputTelefono = document.getElementById('telefono');
const inputCedula = document.getElementById('cedula');
const inputDireccion = document.getElementById('direccion');
const inputNombreUsuario = document.getElementById('nombre-usuario')
const inputContrasena = document.getElementById('contrasena');
const btnGuardar = document.getElementById('btn-guardar');

const validacion = () => {
    let error = false;

    /*if (inputTipo.value == '') {
        error = true;
        inputTipo.classList.add('resaltar-rojo');
    } else {
        inputTipo.classList.remove('resaltar-rojo');
    }*/


    if (inputnombre.value == '') {
        error = true;
        inputnombre.classList.add('resaltar-rojo');
    } else {
        inputnombre.classList.remove('resaltar-rojo');
    }



    if (inputApellidos.value == '') {
        error = true;
        inputApellidos.classList.add('resaltar-rojo');
    } else {
        inputApellidos.classList.remove('resaltar-rojo');
    }


    if (inputTelefono.value == '') {
        error = true;
        inputTelefono.classList.add('resaltar-rojo');
    } else {
        inputTelefono.classList.remove('resaltar-rojo');
    }


    if (inputCedula.value == '') {
        error = true;
        inputCedula.classList.add('resaltar-rojo');
    } else {
        inputCedula.classList.remove('resaltar-rojo');
    }


    if (inputDireccion.value == '') {
        error = true;
        inputDireccion.classList.add('resaltar-rojo');
    } else {
        inputDireccion.classList.remove('resaltar-rojo');
    }


    if (inputNombreUsuario.value == '') {
        error = true;
        inputNombreUsuario.classList.add('resaltar-rojo');
    } else {
        inputNombreUsuario.classList.remove('resaltar-rojo');
    }


    if (inputContrasena.value == '') {
        error = true;
        inputContrasena.classList.add('resaltar-rojo');
    } else {
        inputContrasena.classList.remove('resaltar-rojo');
    };

    if (error == true) {
        /*console.log('Advertencia: Porfavor revise los campos resaltados')*/
        Swal.fire({
            'icon': 'warning',
            'title': 'datos ingresado incorrectamente',
            'text': 'porfavor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Datos ingresados correctamente',
            'text': 'Bienvenido',
            'confirmButtonText': 'Entendido'

        });


    };
};









btnGuardar.addEventListener('click', validacion);