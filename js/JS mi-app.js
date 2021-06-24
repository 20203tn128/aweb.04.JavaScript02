function crearTabla(){
 var body = document.getElementsByTagName("body")[0];
 var tabla = document.createElement("table");
 
 var tblBody = document.createElement("tbody");

 for(var i=0;  i<document.getElementById("fila");i++){
     var fila = document.createElement("tr");
     for(var j=0; j<document.getElementById("columna");j++){
         var celda = document.createElement("td");
         var  texto = document.createTextNode(i+"-"+j);
         celda=appendChild(texto);
         fila.appendChild(celda);
     }
     tblBody.appendChild(fila);
 }
 tabla.appendChild(tblBody);
body.appendChild(tabla);
 tabla.setAttribute("border","50");
}