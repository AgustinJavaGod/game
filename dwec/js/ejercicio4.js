window.onload = function(){
	var botoncalc = document.getElementById("botonCalcular");
	var labelError = document.getElementById("errores");
	
	botoncalc.onclick= function(){

		var dia = document.getElementById("inputDia").value;
		var mes = document.getElementById("inputMes").value;
		var anyo = document.getElementById("inputAnyo").value;
		var fecha = new Date();
	
		if(dia=="" || isNaN(dia))
			labelError.innerHTML = "El día esta vacio o no es un numero";
		else if
			(mes=="" || isNaN(mes))
		labelError.innerHTML = "El mes esta vacio o no es un numero";	
		else if
			(anyo=="" || isNaN(anyo))
		labelError.innerHTML = "El año esta vacio o no es un numero";		
		else{
		var edad = fecha.getFullYear()-anyo;
		if(mes>fecha.getMonth()+1 || (mes==fecha.getMonth()+1 && dia>fecha.getDate()))
			edad--;
		labelError.innerHTML = "tu edad es " + edad;
		}
	
	
	}
	
	document.getElementById("inputDia").onkeyup= function(){
		if (this.value.length==2) 
		document.getElementById ("inputMes").focus();
	}

	document.getElementById("inputMes").onkeyup= function(){
		if (this.value.length==2) 
		document.getElementById ("inputAnyo").focus();
	}

	document.getElementById("inputAnyo").onkeyup= function(){
		if (this.value.length==4) 
		botoncalc.onclick();
	}	
	
	
}
