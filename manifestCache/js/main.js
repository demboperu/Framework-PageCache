if ( navigator.onLine ){
	//alert("on");
	 //var status = window.prompt("What is your current status?");
}else{
	//alert("off");
}

window.addEventListener("offline", function() {
  alert("Tu estas offline revisa tu conexion");
}, true);

window.addEventListener("online", function() {
  alert("Ahora estas conectado")
}, true);