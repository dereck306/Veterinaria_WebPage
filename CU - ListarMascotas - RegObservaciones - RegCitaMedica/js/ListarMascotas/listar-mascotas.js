const cuerpoTabla = document.querySelector("#tbl-mascotas tbody");

let mascotas = [];

const llenarArregloTarjetas = async() => {
    mascotas = await obtenerListaDatos("/obtener-mascotas");
    llenarTabla();
};

const llenarTabla = () => {
    cuerpoTabla.innerHTML = "";

    mascotas.forEach((mascotaTemp) => {

        let fila = cuerpoTabla.insertRow();
        let dirFoto = mascotaTemp.foto;
        fila.insertCell().textContent = mascotaTemp.nombre;
        fila.insertCell().textContent = mascotaTemp.tipodeMascota;
        fila.insertCell().textContent = mascotaTemp.tipodeRaza;
        fila.insertCell().textContent = mascotaTemp.fechaNacimiento;
        fila.insertCell().innerHTML = '<img src = "d">';
        fila.insertCell().textContent = mascotaTemp.cuidados;

        let tdAcciones = fila.insertCell();

        let btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.type = "button";
        btnEditar.classList.add("btn-editar");

        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.type = "button";
        btnEliminar.classList.add("btn-eliminar");

        tdAcciones.appendChild(btnEditar);
        tdAcciones.appendChild(btnEliminar);

        btnEliminar.addEventListener("click", () => {
            Swal.fire({
                title: "¿Esta seguro que desea eliminar a este usuario?",
                text: "La acción no se puede revertir",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "¡Si, eliminar!",
                cancelButtonText: "Cancelar",
            }).then((result) => {
                if (result.isConfirmed) {
                    eliminarDatos('eliminar-usuarios', usuarioTemp._id);
                }
            });
        });

        btnEditar.addEventListener("click", () => {
            Swal.fire({
                title: "¿Esta seguro que desea editar la información de este usuario?",
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
                        "Información editada exitosamente!",
                        "La información del usuario fue editada",
                        "success"
                    );
                }
            });
        });

    });
};

llenarArregloTarjetas();

document.getElementById("btn-agregar").addEventListener("click", () => {});