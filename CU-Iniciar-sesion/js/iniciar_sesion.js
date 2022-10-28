// JavaScript Document
'use strict'
let usuariosTemp = [];
const cargarUsuarios = async() => {
    usuariosTemp = await obtenerListaDatos('/obtener-usuarios-admin');
};

function validateForm(pForm) {
  let pFormulario = document.getElementById(pForm);
  let activeUser = {};
  let estatus = true;
  let usarioValido = false;
  let msg = document.getElementById("msg");
  msg.innerHTML = "";
	      
		  if (pFormulario.pUsuario.value == "") {
			msg.innerHTML = `${msg.innerHTML} - El campo de ingrese nombre de usuario esta vacío.<br/>`;
			pFormulario.pUsuario.style = "border: 1px solid red";
			estatus = false;
		  } else {
			pFormulario.pUsuario.style = "border: 1px solid green";
		  }
		
		  if (pFormulario.pContrasenna.value == "") {
			msg.innerHTML = `${msg.innerHTML} - El campo de contrasenna está vacio.<br/>`;
			pFormulario.pContrasenna.style = "border: 1px solid red";
			estatus = false;
		  } else {
			pFormulario.pContrasenna.style = "border: 1px solid green";
		  }
		  
		   usuariosTemp.forEach(usuarioTemp => {  
			  if (usuarioTemp.nombreUsuario == pFormulario.pUsuario.value && usuarioTemp.contrasenna == pFormulario.pContrasenna.value){
				activeUser = usuarioTemp;
				usarioValido = true;
			  }
			})
		  
		  if (estatus == false) {
			Swal.fire({
			  icon: 'error',
			  title: 'Oops...',
			  text: "Existen campos inválidos o vacíos"
			})
		  }else if(usarioValido == false){
			  Swal.fire({
			  icon: 'error',
			  title: 'Oops...',
			  text: "Usuario inválido"
			  }); 
		  }else{
			    switch(activeUser.tipoUsuario) {
				  case "Veterinario":
					window.location.replace("../CU-Visualizar-perfil-del-veterinario/Pagina-del-veterinario.html");
					break;
				  case "Administrador":
					window.location.replace("../Administrador/administrador.html");
					break;
				  case "Secretaria":
					window.location.replace("../CU Rolo - Perfil Secretaria/paginaInicial-Secretaria.html");
					break;
				  case "Cliente":
					window.location.replace("../CU-Perfil-cliente/Pagina_Inicial _Cliente.html");
				}
		  }
 
}
cargarUsuarios();