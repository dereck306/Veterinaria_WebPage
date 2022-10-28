const cuerpoTabla = document.querySelector('#tbl-usuarios tbody');
let listaReservaciones = [];
const inputFiltro = document.getElementById('txt-filtro');

const inicializarListas = async() => {
    listaReservaciones = await obtenerListaDatos('/obtener-habitacion');
    mostrarTabla();
};


const mostrarTabla = async() => {
    cuerpoTabla.innerHTML = '';

    listaReservaciones.forEach(habitacion => {

        if (habitacion.tipoDeHabitacion.toLowerCase().includes(inputFiltro.value.toLowerCase())) {

            let fila = cuerpoTabla.insertRow();

            fila.insertCell().innerText = habitacion.tipoDeHabitacion;
            fila.insertCell().innerText = habitacion.tipoDeEspecie;
            fila.insertCell().innerText = habitacion.tipoDeRaza;
            fila.insertCell().innerText = habitacion.fechaEntrada;
            fila.insertCell().innerText = habitacion.fechaSalida;
            fila.insertCell().innerText = habitacion.CuidadosEspeciales;


            let tdAcciones = fila.insertCell();

            let btnEditar = document.createElement('button');
            btnEditar.textContent = 'Editar';
            btnEditar.type = 'button';

            let btnDesactivar = document.createElement('button');
            btnDesactivar.textContent = 'Eliminar';
            btnDesactivar.type = 'button';

            btnEditar.classList.add('btn-editar'); //estilo a botones
            btnDesactivar.classList.add('btn-desactivar');

            tdAcciones.appendChild(btnEditar);
            tdAcciones.appendChild(btnDesactivar);


            btnDesactivar.addEventListener('click', () => {
                Swal.fire({
                    title: '¿Esta seguro que desea eliminar esta reservacion?',
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
                            'Su reservacion fue desactivada.',
                            'Exito'
                        )
                    }
                })
            })
            btnEditar.addEventListener('click', () => {
                Swal.fire({
                    title: '¿Esta seguro que desea editar esta reservacion?',
                    text: "La acción no se puede revertir!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#58A082',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si , Editar!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Editada!',
                            'Su reservacion fue editada.',
                            'Exito'
                        )
                    }
                })

            })

        }
    });


};


inicializarListas();
inputFiltro.addEventListener('keyup', mostrarTabla);