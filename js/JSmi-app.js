function crearTabla(){
 var tablafilas = document.getElementById("fila").value;
 var tablascolumnas = document.getElementById("columna").value;
 var res = tablascolumnas*tablafilas;
 document.write("<table border='3px' align='center' >");
 for(var i=0;  i<tablafilas;i++){
     document.write("<tr width='100px' hight='100px' >");
     for(var j=0; j<tablascolumnas;j++){
         document.write("<td width='100px' height='50px' >");
         res--;
     document.write("</td>");
     }
     document.write("</tr>");
 }
 document.write("</table>");
 
}
