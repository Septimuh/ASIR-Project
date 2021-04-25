function Inicial(variable) {
  if (variable == 0) {
    var ElementoDIV = document.getElementsByClassName("Verde");

    for (var i = 0; i < ElementoDIV.length; i++) {
      var Elemento_basura = document.createElement("a");

      var ElementA_Añadir = document.createElement("a");
      var ElementA_Eliminar = document.createElement("a");

      ElementA_Añadir.innerHTML =
        "<a onclick='CrearCamposNuevos(" + i + ",0)'>Añadir [+] </a>";
      ElementA_Eliminar.innerHTML =
        "<a onclick='CrearCamposNuevos(" + i + ",1)'> Eliminar [-] </a>";
      Elemento_basura.innerHTML =
        "<a class='Basura'style='float:right;margin-left:9px'onclick='EliminarSeccion(" +
        i +
        ")'><i class='fas fa-trash'></i></a>";

      ElementA_Añadir.style.color = "rgb(116, 233, 116)";
      ElementA_Eliminar.style.color = "rgb(199, 13, 28)";

      /*
            ElementA_Añadir.addEventListener("click", CrearSeccionNueva(i,0));
            ElementA_Eliminar.addEventListener("click", CrearSeccionNueva(i,1),false);
        */
      ElementoDIV[i].appendChild(ElementA_Añadir);
      ElementoDIV[i].appendChild(ElementA_Eliminar);
      ElementoDIV[i].appendChild(Elemento_basura);

      /* 
        Elemento_basura.innerHTML =
        '<a onclick="EliminarSeccion(' + i + ')">hola</a>';
      */
      // Elemento_basura.after(ElementoDIV[i]);
      //console.log(ElementoDIV[i].innerHtsml);
    }
  } else {
    console.log("opcion recibida: " + variable);
    var ElementoDIV = document
      .getElementsByClassName("Titulo")
      [variable].getElementsByClassName("Verde")[0];
    console.log(ElementoDIV);

    var ElementA_Añadir = document.createElement("a");
    var ElementA_Eliminar = document.createElement("a");
    var Elemento_basura = document.createElement("a");

    ElementA_Añadir.innerHTML =
      "<a onclick='CrearCamposNuevos(" + variable + ",0)'>Añadir [+] </a>";
    ElementA_Eliminar.innerHTML =
      "<a onclick='CrearCamposNuevos(" + variable + ",1)'> Eliminar [-] </a>";

    ElementA_Añadir.style.color = "rgb(116, 233, 116)";
    ElementA_Eliminar.style.color = "rgb(199, 13, 28)";

    ElementoDIV.appendChild(ElementA_Añadir);
    ElementoDIV.appendChild(ElementA_Eliminar);

    Elemento_basura.innerHTML =
      "<a class='Basura'style='float:right;margin-left:9px' onclick='EliminarSeccion(" +
      variable +
      ")'><i class='fas fa-trash'></i></a>";
    ElementoDIV.appendChild(Elemento_basura);
  }
  //console.log(ElementA);
}
function EliminarSeccion(numeroBoton) {
  console.log("Saludos desde el campo " + numeroBoton);
  var ULpadre = document.getElementById("ListaContenido");
  var campo = document.getElementsByClassName("Titulo")[numeroBoton];
  //document.getElementsByClassName("Titulo")[numeroBoton].getElementsByTagName("b")[0].innerHTML;
  var barra = document.getElementsByTagName("hr")[numeroBoton];

  ULpadre.removeChild(campo);
  ULpadre.removeChild(barra);
  var titulos = document.getElementsByClassName("Basura");
  //console.log(titulos[1]);
  for (var j = 0; j < titulos.length; j++) {
    document.getElementsByClassName("Basura")[j].innerHTML =
      "<a class='Basura'style='float:right;margin-left:9px' onclick='EliminarSeccion(" +
      j +
      ")'><i class='fas fa-trash'></i></a>";
  }
}
var m = 0;
function CrearSeccionNueva() {
  var CrearNuevo = document.getElementById("AñadirExtras");
  var ElementoA = document.createElement("li");
  ElementoA.innerHTML =
    "<b>Seccion Nueva </b> <i style='margin-left: 1%;'onclick='EditarSeccion(" +
    (4 + m) +
    ")'class='fas fa-edit'></i>  <div class='Verde'></div>";
  ElementoA.className = "Titulo";

  CrearNuevo.appendChild(ElementoA);
  CrearNuevo.appendChild(document.createElement("hr"));

  // console.log("Hola");
  //<i style='margin-left: 1%;'onclick='EditarCampo(0)'class="fas fa-edit"></i>
  Inicial(4 + m);
  m++;
}
function CrearCamposNuevos(variable, num) {
  if (num == 0) {
    //Crear
    switch (variable) {
      case 0:
        var parrafo = document.createElement("p");
        parrafo.innerHTML = "Campo Extra <input type='text'>";
        document.getElementsByClassName("Titulo")[0].appendChild(parrafo);
        break;
      case 1:
        var contenedor = document.getElementsByClassName("Titulo")[variable];
        //console.log(contenedor.getElementsByTagName("b")[0]);
        var divContenedor = document.createElement("div");
        var formacionContenedor = document.createElement("h4");
        var textoContenedor = document.createElement("p");

        textoContenedor.innerHTML =
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan" +
          "tincidunt tellus, a varius lectus lobortis sit amet. Proin vulputate " +
          "diam id mauris malesuada, sed auctor ante imperdiet. Praesent tincidunt" +
          " nunc massa, ac condimentum felis eleifend et. Nullam eleifend gravida vulputate";
        formacionContenedor.innerHTML =
          "<i>Formacion </i>- Centro de Estudios <b>(Fecha Inicio-Fecha Fin)</b>";

        divContenedor.appendChild(formacionContenedor);
        divContenedor.appendChild(textoContenedor);
        contenedor.appendChild(divContenedor);

        break;
      default:
        console.log("Crear en " + variable);
        break;
    }
  } //Delete
  else {
    console.log("Delete en " + variable);
  }
}
function EditarSeccion(num) {
  var Campo_modificar = document
    .getElementsByClassName("Titulo")
    [num].getElementsByTagName("b")[0];

  //console.log(Campo_modificar);
  var Texto = Campo_modificar.innerHTML;
  Campo_modificar.innerHTML =
    "<input onkeyup='CambioNombre(0," +
    num +
    ",0)'type='text' value='" +
    Texto +
    "'> <i onclick='CambioNombre(0," +
    num +
    ",1)' style='font-size:15px' class='fas fa-check'></i> ";

  var Boton_Edit = document
    .getElementsByClassName("Titulo")
    [num].getElementsByTagName("svg")[0];
  //console.log(Boton_Edit);
  Boton_Edit.style.display = "none";
}

function CambioNombre(TipoCambioNombre, num, bandera) {
  if (bandera == 1 || event.keyCode == 13) {
    //KeyCode for Enter Key
    console.log(TipoCambioNombre, num);
    if (TipoCambioNombre == 0) {
      //CambioNombreSeccion
      var Input_guardar = document
        .getElementsByClassName("Titulo")
        [num].getElementsByTagName("b")[0];
      textoGuardar = Input_guardar.getElementsByTagName("input")[0].value;
      console.log(textoGuardar);

      Input_guardar.innerHTML = textoGuardar;
      var Boton_Edit = document
        .getElementsByClassName("Titulo")
        [num].getElementsByTagName("svg")[0];
      Boton_Edit.style.display = "inline";

      //console.log(Input_guardar);
    } //CambioNombreCampos
    else {
    }
  }
}

function CambioMenu(numeroMenu) {
  var menu1 = document.getElementById("NavBar").getElementsByTagName("li");
  console.log(menu1);

  console.log(document.getElementById("menu").getElementsByTagName("ul"));
  for (var i = 0; i < menu1.length; i++) {
    menu1[i].getElementsByTagName("div")[0].style.backgroundColor =
      "rgb(79, 79, 192)";
    document.getElementById("menu").getElementsByTagName("ul")[
      i
    ].style.display = "none";
  }
  document.getElementById("menu").getElementsByTagName("ul")[
    numeroMenu + 1
  ].style.display = "block";
  document.getElementById("NavBar").style.display = "block";
  menu1[numeroMenu].getElementsByTagName("div")[0].style.backgroundColor =
    "rgba(102, 102, 236, 0.849)";
}

function CargaCV() {
  var contenido = document.getElementById("ListaContenido");
  //console.log(contenido);
  var datosPersonales = contenido.getElementsByClassName("Titulo")[0]; //Datos Personales
  var formacion = contenido.getElementsByClassName("Titulo")[1]; //Formacion
  var datosContacto = contenido.getElementsByClassName("Titulo")[2]; //Datos Contacto
  var extra = contenido.getElementsByClassName("Titulo")[3]; //Extra

  //console.log(datosPersonales);
  EjecutarDatosPersonales(datosPersonales);
  EjecutarFormacion(formacion);
}
var contadorDatosPersonales = 0;
function EjecutarDatosPersonales(datos) {
  // if (contadorDatosPersonales == 0) {
  var datosExtra = "";
  var cantidad = datos.getElementsByTagName("p").length;
  var nombreCompleto =
    datos.getElementsByTagName("p")[0].getElementsByTagName("input")[0].value +
    " " +
    datos.getElementsByTagName("p")[1].getElementsByTagName("input")[0].value;
  var imagen = datos
    .getElementsByTagName("p")[2]
    .getElementsByTagName("input")[0].value;
  console.log("Cantidad logs: " + cantidad);
  if (cantidad > 3) {
    for (var i = 3; i < cantidad; i++) {
      datosExtra +=
        "<br>" +
        datos.getElementsByTagName("p")[i].getElementsByTagName("input")[0]
          .value;
    }
  }

  //console.log(imagen);
  console.log(nombreCompleto);
  //var elemento = document.createElement("div");
  var elemento =
    "<img src='" +
    imagen +
    "' id='FotoPersonal'/>" +
    nombreCompleto +
    " " +
    datosExtra;
  document.getElementById("Datos Personales").innerHTML = elemento;
  contadorDatosPersonales++;
  // } else {
  //   document.getElementById("Datos Personales").;
  // }
}

function EjecutarFormacion(datos) {
  var cantidad = datos.getElementsByTagName("h4").length;
  document.getElementById("Formacion").innerHTML = "";
  var elemento = document.createElement("div");

  for (var i = 0; i < cantidad; i++) {
    var titulo = datos.getElementsByTagName("h4")[i].innerHTML;
    var descripcion = datos.getElementsByTagName("p")[i].innerHTML;

    console.log(descripcion);
    elemento.innerHTML +=
      "<br><br><i>" + titulo + "</i> <p>" + descripcion + "</p>";
  }
  document.getElementById("Formacion").appendChild(elemento);
}
/*
function HolaMundo()
{
    console.log("Hola Mundo"),
}

*/
/*By Septimus*/
