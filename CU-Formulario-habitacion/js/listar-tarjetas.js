const cuerpoTabla = document.querySelector('#tbl-tarjetas tbody');
const tabla = document.getElementById('tbl-tarjetas');

tabla.classList.add("ocultar");


tabla.classList.add("ocultar");

const llenarTabla = () => {
    cuerpoTabla.innerHTML = '';
    tarjetas.forEach(usuarioTemp => {
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().textContent = usuarioTemp.marca;
        fila.insertCell().textContent = usuarioTemp.nombre;
        fila.insertCell().textContent = usuarioTemp.numero;
        fila.insertCell().textContent = usuarioTemp.cvv;
        fila.insertCell().textContent = usuarioTemp.exp;
        fila.insertCell().textContent = usuarioTemp.activa;

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
                title: '¿Esta seguro que desea desactivar la tarjeta?',
                text: "La acción no se puede revertir!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si , Borrelo!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Borrado!',
                        'Su tarjeta fue desactivada.',
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