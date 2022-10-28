// JavaScript Document
const btnIngresar = document.getElementById('btn-ingresar');

const iniciarSesion = async() => {
	const { value: formValues } = await Swal.fire({
		title: 'Inicio sesión',
		html:
			'<input id="txt-correo-inicio" class="swal2-input" type="email">' +
			'<input id="txt-contrasenna" class="swal2-input" type="password">',
		focusConfirm: false,
		preConfirm: () => {
			return [
				document.getElementById('txt-correo-inicio').value,
				document.getElementById('txt-contrasenna').value
			]
		}
	}]
	
	if (formValues){
		let correo = formValues[0];
		let contrasenna = formValues[0];
	}
};


btnIngresar.addEventListener('click', iniciarSesion)