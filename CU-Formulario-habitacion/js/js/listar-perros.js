const cuerpoTabla = document.querySelector('#tbl-perros tbody');
const tabla = document.getElementById('tbl-perros');

tabla.classList.add("ocultar");


tabla.classList.add("ocultar");

const llenarTabla = () => {
    cuerpoTabla.innerHTML = '';
    perros.forEach(usuarioTemp => {
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().textContent = usuarioTemp.entrada;
        fila.insertCell().textContent = usuarioTemp.salida;
        fila.insertCell().textContent = usuarioTemp.medico;
        fila.insertCell().textContent = usuarioTemp.nombremascota;
        fila.insertCell().textContent = usuarioTemp.Genero;
        fila.insertCell().textContent = usuarioTemp.Raza;
        fila.insertCell().textContent = usuarioTemp.ServiciosMedicos;

        let tdAcciones = fila.insertCell();

        let btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.type = 'button';

        let btnDesactivar = document.createElement('button');
        btnDesactivar.textContent = 'Desactivar';
        btnDesactivar.type = 'button';

        btnEditar.classList.add('btn-editar'); //estilo a botones
        btnDesactivar.classList.add('btn-desactivar');

        tdAcciones.appendChild(btnEditar);
        tdAcciones.appendChild(btnDesactivar);

        btnDesactivar.addEventListener('click', () => {
            Swal.fire({
                title: '¿Esta seguro que desea borrar esta entrada?',
                text: "La acción no se puede revertir!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#58A082',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si , Borrelo!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Borrado!',
                        'Su entrada fue eliminada.',
                        'Exito'
                    )
                }
            })
        })

    });

};




llenarTabla();

document.getElementById('btn-generar-reporte').addEventListener('click', () => {
    tabla.classList.remove('ocultar');
});