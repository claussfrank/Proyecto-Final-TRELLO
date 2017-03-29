// Creamos  un construtor  para  almacenar  los  datos  que ingrese el  usario



//Funcion que  nos  ayuda  a crear  el  titulo  de  nuestra etiqueta por  medio  del  primer input
function nuevaTarea(){
  var tituloDeNuevaTarea = document.getElementById("tituloDeNuevaTarea").value;
  var agregarP =document.createElement("p");
  var tituloTarea=document.getElementById("tituloDeTarea");
  var botonBorrar=document.createElement("button");
  //var nuevoNodo=agregarP.cloneNodo(true);


  agregarP.id = tituloDeNuevaTarea;
  agregarP.innerHTML = tituloDeNuevaTarea;
  document.getElementById("tituloDeTarea").appendChild(agregarP);

//  nuevoNodo.id=Date.now();
//  botonBorrar.value=nuevoNodo.
  botonBorrar.innerHTML="borrar"

  botonBorrar.onclick= function(){
    var idDeElementoABorrar=document.getElementById(this.value)
    tituloTarea.removeChild(this)
    tituloTarea.removeChild(idDeElementoABorrar)

  }



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

//Funcion que nos  permite borrar el  texto  que  escribimos  en  nuestro input
function borrar(){
  var vacio =""
  document.getElementById("tituloDeNuevaTarea").value = vacio;
  document.getElementById("nuevaTareaEnLista").value = vacio;
}
// Funcion para  agregar etiqueta
//function nuevaTarea(){
  //var contenedorDeTarea=document.getElementById("etiquetaUNO");

}
