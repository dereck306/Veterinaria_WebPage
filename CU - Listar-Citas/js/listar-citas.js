'use strict'

const cuerpoTabla = document.querySelector('#tbl-tabla tbody');
const inputFiltro = document.getElementById('txt-filtro');
let listacita = [];

const inicializarLista = async() => {
    listacita = await obtenerListaCitas('/obtener-cita-medica');
    mostrarTabla();
};


const mostrarTabla = async() => {
    cuerpoTabla.innerHTML = '';

    listacita.forEach(citatemp => {
        if (citatemp.idDueno.toLowerCase().includes(inputFiltro.value.toLowerCase())) {
            let fila = cuerpoTabla.insertRow();
            fila.insertCell().innerText = citatemp.idDueno;
            fila.insertCell().innerText = citatemp.idMascota;
            fila.insertCell().innerText = citatemp.idMedico;
            fila.insertCell().innerText = citatemp.fecha;
            fila.insertCell().innerText = citatemp.hora;
            fila.insertCell().innerText = citatemp.sede;


            let tdAcciones = fila.insertCell();

            let btnEditar = document.createElement('button');
            btnEditar.textContent = 'Editar';
            btnEditar.type = 'button';

            let btnDesactivar = document.createElement('button');
            btnDesactivar.textContent = 'Cancelar';
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

};




inicializarLista();



inputFiltro.addEventListener('keyup', mostrarTabla);