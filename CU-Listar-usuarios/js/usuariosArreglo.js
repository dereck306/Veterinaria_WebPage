'use strict'
const cuerpotabla = document.querySelector('#tbl-usuarios tbody');
const inputFiltro = document.getElementById('txt-filtro');

let listaUsuarios = [];


const inicializarListas = async() => {
    listaUsuarios = await obtenerListaDatos('/obtener-usuarios-admin');
    mostrarTabla();
};

const mostrarTabla = async() => {
    cuerpotabla.innerHTML = '';

    listaUsuarios.forEach(usuario => {
        if (usuario.tipoUsuario.toLowerCase().includes(inputFiltro.value.toLowerCase())) {
            let fila = cuerpotabla.insertRow();
            fila.insertCell().innerText = usuario.tipoUsuario;
            fila.insertCell().innerText = usuario.nombre;
            fila.insertCell().innerText = usuario.apellidos;
            fila.insertCell().innerText = usuario.telefono;
            fila.insertCell().innerText = usuario.cedula;
            fila.insertCell().innerText = usuario.direccion;
            fila.insertCell().innerText = usuario.nombreUsuario;
            fila.insertCell().innerText = usuario.contrasenna;

            let tdAcciones = fila.insertCell();

            let btnEditar = document.createElement('button');
            btnEditar.textContent = 'Editar';
            btnEditar.type = 'button';

            let btnDesactivar = document.createElement('button');
            btnDesactivar.textContent = 'Borrar';
            btnDesactivar.type = 'button';

            btnEditar.classList.add('btn-editar'); //estilo a botones
            btnDesactivar.classList.add('btn-desactivar');

            tdAcciones.appendChild(btnEditar);
            tdAcciones.appendChild(btnDesactivar);

            btnDesactivar.addEventListener('click', () => {
                Swal.fire({
                    title: '¿Esta seguro que desea cencelar esta cita?',
                    text: "La acción no se puede revertir!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#58A082',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si , Borrela!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Borrado!',
                            'Su entrada fue eliminada.',
                            'Exito'
                        )
                    }
                })
            });
        }

    });
}




inicializarListas();
inputFiltro.addEventListener('keyup', mostrarTabla);