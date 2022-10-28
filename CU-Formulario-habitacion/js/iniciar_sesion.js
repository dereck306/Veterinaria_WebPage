// JavaScript Document
function validateForm(pFormulario) {
  let estatus = true;
  let msg = document.getElementById("msg");
  msg.innerHTML = "";
  if (pFormulario.pUsuario.value == "") {
    msg.innerHTML = `${msg.innerHTML} - El campo de ingrese nombre de usuario está vacío.<br/>`;
    pFormulario.pUsuario.style = "border: 1px solid red";
    estatus = false;
  } else {
    pFormulario.pUsuario.style = "border: 1px solid green";
  }

  if (pFormulario.pContraseña.value == "") {
    msg.innerHTML = `${msg.innerHTML} - El campo de contraseña está vacío.<br/>`;
    pFormulario.pContraseña.style = "border: 1px solid red";
    estatus = false;
  } else {
    pFormulario.pContraseña.style = "border: 1px solid green";
  }

  if (estatus == false) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Existen campos inválidos o vacíos"
    })
  }
  return estatus;
}