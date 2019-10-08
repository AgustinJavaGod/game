window.onload = function() {
	
	var log = document.getElementById("log");
	var secreto = Math.floor(Math.random(1,100)*100)+1;
	console.log(secreto);
	
	var numIntentos = 6;
	while (numIntentos) { 
		var intento = prompt("Introduce un número entero entre 1 y 100");
		
		if (intento == secreto) {
			log.innerHTML += "Aciertas<br>";
			numIntentos = 1;
		}
		else if (intento < secreto)
			log.innerHTML += "Te quedas corto<br>";
		else if (intento > secreto)
			log.innerHTML += "Te pasas<br>";
		
		numIntentos--;
	}
	
	log.innerHTML += "El número era: " + secreto;


}