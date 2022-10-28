const cuerpoTabla = document.querySelector('#tbl-perros tbody');
const tabla = document.getElementById('tbl-perros');
const inputFiltro = document.getElementById('txt-filtro');

//tabla.classList.add("ocultar");

const llenarTabla = () => {
    cuerpoTabla.innerHTML = '';

    tarjetas.forEach(usuarioTemp => {
        if (usuarioTemp.Marca.toLowerCase().includes(inputFiltro.value.toLowerCase())) {
            let fila = cuerpoTabla.insertRow();
            fila.insertCell().textContent = usuarioTemp.Marca;
            fila.insertCell().textContent = usuarioTemp.NombredeTarjetahabiente;
            fila.insertCell().textContent = usuarioTemp.Numerodetarjeta;
            fila.insertCell().textContent = usuarioTemp.exp;
            fila.insertCell().textContent = usuarioTemp.Activa;

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
                    title: '¿Esta seguro que desea desactivar esta tarjeta?',
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
                            'Su tarjeta fue desactivada.',
                            'Exito'
                        )
                    }
                })
            })
        }

    });

};




llenarTabla();



inputFiltro.addEventListener('keyup', llenarTabla);
document.getElementById('btn-agregar').addEventListener('click', () => {
    window.location.href = 'https://www.google.com/';
});