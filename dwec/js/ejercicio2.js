window.onload = function(){
    var numero = document.getElementById("numero");
    numero.value = "";
    numero.focus();
    numero.onkeyup = function(e) {
        if(e.which == 13){
            var texto = numero.value;
            if(texto.length == 0){
                alert("No se ha introducido nada.")
            }else if(isNaN(texto)){
                alert("No es un número.");
            }else{
                var parImpar = (texto%2==0 ? "El número es par" : "El número es impar");
                alert(parImpar);
            }
        }
    }
}