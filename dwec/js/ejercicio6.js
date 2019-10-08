window.onload = function(){
    var input = document.getElementById("inputItems");
    var lista = document.getElementById("listaCompra");
    input.focus();

    var colores = ["red","green","blue","purple","DarkRed","DarkGreen","DarkBlue","MediumPurple","Sienna","SpringGreen"];

    input.onkeyup = function(e){
        if (e.key == "Enter") {
            if(this.value.length){
                var nuevoLI = document.createElement("li");
                nuevoLI.innerHTML = this.value;
                lista.appendChild(nuevoLI);
                this.value = "";
                nuevoLI.onclick = function(){
                    this.style.backgroundColor = colores[Math.floor(Math.random() * 11)];
                }

                nuevoLI.ondblclick = function(){
                    this.parentNode.removeChild(this);
                }
            }
        }
    }
}