//Funcion que  nos  ayuda  a crear  el  titulo  de  nuestra etiqueta por  medio  del  primer input
function nuevaTarea(){
  var tituloDeNuevaTarea = document.getElementById('tituloDeNuevaTarea').value;
  var agregarP =document.createElement("p");
  agregarP.id = tituloDeNuevaTarea;
  agregarP.innerHTML = tituloDeNuevaTarea;
  document.getElementById("tituloDeTarea").appendChild(agregarP);
  borrar();
}
//funcion que  nos  permite  agregar nuevo punto en  nuestra lista  mediante  el  segundo input
function nuevoPuntoEnLista() {
    var nuevoElemento = document.getElementById("nuevaTareaEnLista").value;
    if(nuevoElemento.length > 0)
    {
      var agregaLi = document.createElement("li");
      agregaLi.id = nuevoElemento;
      agregaLi.innerHTML = nuevoElemento;
      document.getElementById("nuevoEnLista").appendChild(agregaLi);
      borrar();
    }

}

//Funcion que nos  permite borrar el  texto  que  escribimos  en  nuestro input
function borrar(){
  var vacio =""
  document.getElementById("tituloDeNuevaTarea").value = vacio;
  document.getElementById("nuevaTareaEnLista").value = vacio;
}
