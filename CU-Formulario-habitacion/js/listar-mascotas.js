const cuerpoTabla = document.querySelector('#listado-mascotas tbody');
const pCelular = document.getElementById('pCelular');
const pNombre = document.getElementById('pNombre');



const llenarTabla = () => {
    cuerpoTabla.innerHTML = '';

    mascotas.forEach(mascotaTemp => {
        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = mascotaTemp.nombre;
        fila.insertCell().textContent = mascotaTemp.animal;
        fila.insertCell().textContent = mascotaTemp.edad;
        fila.insertCell().textContent = mascotaTemp.genero;
        fila.insertCell().textContent = mascotaTemp.calificacion;



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
                title: '¿Esta seguro que desea desactivar esta mascota?',
                text: "La acción no se puede revertir!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#58A082',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si!',
                cancelButtonText: 'No'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Borrado!',
                        'Mascota desactivada.',
                        'Exito'
                    )
                }
            })
        })
        btnEditar.addEventListener('click', () => {
            window.location.href = '../Visualizar Mascota/Visualizar-Mascota.html';
        });


    });

};




llenarTabla();

document.getElementById('btn-generar-reporte').addEventListener('click', () => {
    tabla.classList.remove('ocultar');
});

document.getElementById('btn-agregar').addEventListener('click', () => {
    window.location.href = 'https://www.google.com/';
});