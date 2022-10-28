// JavaScript Document

function myFunction(pIdCont) {
  let tempContenido = document.getElementById(pIdCont);
  if (tempContenido.className == "opcionesMenu"){
      tempContenido.className = "opcionesMenu show";
  }else{
     tempContenido.className = "opcionesMenu";
  }
  
}


