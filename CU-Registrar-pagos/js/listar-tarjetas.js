const cuerpoTabla = document.querySelector("#tbl-perros tbody");
const tabla = document.getElementById("tbl-perros");
const inputFiltro = document.getElementById("txt-filtro");

//tabla.classList.add("ocultar");

let tarjetas = [];

const llenarArregloUsuarios = async() => {
    tarjetas = await getDatos("listar-tarjetas");
    llenarTabla();
};

const llenarTabla = () => {
    cuerpoTabla.innerHTML = "";

    tarjetas.forEach((usuarioTemp) => {
        if (
            usuarioTemp.selectTarjeta
            .toLowerCase()
            .includes(inputFiltro.value.toLowerCase()) ||
            usuarioTemp.nombre
            .toLowerCase()
            .includes(inputFiltro.value.toLowerCase()) ||
            usuarioTemp.inputNúmeroDeTarjeta
            .toLowerCase()
            .includes(inputFiltro.value.toLowerCase()) ||
            usuarioTemp.inputFechaDeVencimiento
            .toLowerCase()
            .includes(inputFiltro.value.toLowerCase()) ||
            usuarioTemp.estado
            .toLowerCase()
            .includes(inputFiltro.value.toLowerCase())
        ) {
            let fila = cuerpoTabla.insertRow();

            fila.insertCell().textContent = usuarioTemp.selectTarjeta;
            fila.insertCell().textContent = usuarioTemp.nombre;
            fila.insertCell().textContent = usuarioTemp.inputNúmeroDeTarjeta;
            fila.insertCell().textContent = usuarioTemp.inputFechaDeVencimiento;
            fila.insertCell().textContent = usuarioTemp.estado;

            let tdAcciones = fila.insertCell();

            let btnEditar = document.createElement('button');
            btnEditar.textContent = 'Editar';
            btnEditar.type = 'button';

            let btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.type = 'button';

            btnEditar.classList.add('btn-editar'); //estilo a botones
            btnEliminar.classList.add('btn-desactivar');

            tdAcciones.appendChild(btnEditar);
            tdAcciones.appendChild(btnEliminar);

            btnEliminar.addEventListener('click', () => {
                Swal.fire({
                    title: '¿Esta seguro que desea eliminar esta tarjeta?',
                    text: "La acción no se puede revertir!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#58A082',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, Borrela!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        eliminarDatos('eliminar-tarjeta', usuarioTemp._id);
                    }
                });
            })

            btnEditar.addEventListener("click", () => {
                Swal.fire({
                    title: "¿Esta seguro que desea editar la información de esta tarjeta?",
                    text: "La información editada se puede volver a editar en cualquier momento",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "¡Si, editar!",
                    cancelButtonText: "Cancelar",
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            "¡Tarjeta editada exitosamente!",
                            "Información editada",
                            "success"
                        );
                    }
                });
            });
        }
    });
};

llenarArregloUsuarios();

// document.getElementById('btn-generar-reporte').addEventListener('click', () => {
//     tabla.classList.remove('ocultar');
// });

inputFiltro.addEventListener("keyup", llenarTabla);

document.getElementById("btn-agregar").addEventListener("click", () => {});