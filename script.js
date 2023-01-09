document.getElementById("datetime").innerHTML = "Fecha y Hora : " + Date();

document.getElementById("name").style.height = "25px";

document.forms["contact"]["name"].style.fontSize = "20px";

document.forms["contact"]["message"].style.fontSize = "15px";

document.forms["contact"]["message"].style.fontFamily = "Arial";

document.getElementById("enviar").addEventListener("click", function(){
  let nombre = document.getElementById("name").value;
  let mensaje = document.getElementById("message").value;
  if (nombre != "" && mensaje != ""){
    alert("Su mensaje ha sido exitosamente enviado. Muchas Gracias!");
  } else {
    alert("Complete el formulario primero, gracias.")
  }
})