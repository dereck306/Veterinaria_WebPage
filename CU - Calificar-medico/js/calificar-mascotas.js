const btnDesactivar = document.getElementById('btn-guardar');

btnDesactivar.addEventListener('click', () => {
    Swal.fire({
        title: '¿Esta seguro que desea guardar la Calificación?',
        text: "La acción no se puede revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#58A082',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si , Adelante!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Listo!',
                'Su calificación fue enviada.',
                'Exito'
            )
        }
    })
})