window.onload = function(){
	//alert("ventana emergente");
	
	//OJO con document.write porque saca mi mensaje sobreescribiendo todo el BODY
	//document.write("escribo en el documento");
	
	console.log("mensaje por la consola del navegador");

	var campoContra = document.getElementById("inputPass");
	var etiquetaContra = document.getElementById("labelPass");

	campoContra.onkeyup = function(evento){
		var teclaPulsada = evento.which;
		if (teclaPulsada == 13) {
			//Se ha pulsado INTRO
			
			//Recupero lo que el usuario lleva escrito dentro del INPUT
			var contra = campoContra.value;
			
			//Comprobamos si la longitud de esa cadena es menos que 8
			if (contra.length < 8) {
				//Mostramos un mensaje de error en el lugar previsto
				etiquetaContra.innerHTML = "La contraseña debe tener al menos 8 caracteres";
				etiquetaContra.style.color = "#FF0000";
			} else {
				etiquetaContra.innerHTML = "";
			}
		}	
	}
	
}
