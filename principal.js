function Inicial(variable)
{   
    if(variable==0)
    {
        var ElementoDIV = document.getElementsByClassName("Verde");
   

        for(i=0;i<ElementoDIV.length-1;i++)
        {
            var ElementA_Añadir= document.createElement("a");
            var ElementA_Eliminar= document.createElement("a");

            ElementA_Añadir.innerHTML="<a onclick='CrearCamposNuevos("+i+",0)'>Añadir [+] </a>";
            ElementA_Eliminar.innerHTML="<a onclick='CrearCamposNuevos("+i+",1)'> Eliminar [-] </a>";

            ElementA_Añadir.style.color='rgb(116, 233, 116)';
            ElementA_Eliminar.style.color='rgb(199, 13, 28)';

        /*
            ElementA_Añadir.addEventListener("click", CrearSeccionNueva(i,0));
            ElementA_Eliminar.addEventListener("click", CrearSeccionNueva(i,1),false);
        */
        ElementoDIV[i].appendChild(ElementA_Añadir);
        ElementoDIV[i].appendChild(ElementA_Eliminar);

            //console.log(ElementoDIV[i].innerHtsml);
        }
    }
    else
    {
        console.log("opcion recibida: "+variable)
        var ElementoDIV=document.getElementsByClassName("Titulo")[variable].getElementsByClassName("Verde")[0];
        console.log(ElementoDIV);

        var ElementA_Añadir =document.createElement("a");
        var ElementA_Eliminar =document.createElement("a");

        ElementA_Añadir.innerHTML="<a onclick='CrearCamposNuevos("+variable+",0)'>Añadir [+] </a>";
        ElementA_Eliminar.innerHTML="<a onclick='CrearCamposNuevos("+variable+",1)'> Eliminar [-] </a>";

        ElementA_Añadir.style.color='rgb(116, 233, 116)';
        ElementA_Eliminar.style.color='rgb(199, 13, 28)';

        ElementoDIV.appendChild(ElementA_Añadir);
        ElementoDIV.appendChild(ElementA_Eliminar);

    }
    //console.log(ElementA);
    
}
var m=0;
function CrearSeccionNueva()
{
    var CrearNuevo=document.getElementById("AñadirExtras");
    var ElementoA=document.createElement("li");
    ElementoA.innerHTML="<b>Seccion Nueva </b> <i style='margin-left: 1%;'onclick='EditarSeccion("+(4+m)+")'class='fas fa-edit'></i>  <div class='Verde'>"
    ElementoA.className="Titulo";
    
    CrearNuevo.appendChild(ElementoA);
    CrearNuevo.appendChild(document.createElement("hr"));


   // console.log("Hola");
   //<i style='margin-left: 1%;'onclick='EditarCampo(0)'class="fas fa-edit"></i>
   Inicial(4+m);
   m++;
}
function CrearCamposNuevos(variable,num)
{
    if(num==0)//Crear
    {
        console.log("Crear en "+variable);
    }
    else//Delete
    {
        console.log("Delete en "+variable);

    }
}
function EditarSeccion(num)
{
    var Campo_modificar = document.getElementsByClassName("Titulo")[num].getElementsByTagName("b")[0];

    
    //console.log(Campo_modificar);
    Texto=Campo_modificar.innerHTML;
    Campo_modificar.innerHTML="<input onkeyup='CambioNombre(0,"+num+",0)'type='text' value='"+Texto+"'> <i onclick='CambioNombre(0,"+num+",1)' style='font-size:15px' class='fas fa-check'></i> ";  

    var Boton_Edit = document.getElementsByClassName("Titulo")[num].getElementsByTagName("svg")[0];
    //console.log(Boton_Edit);
    Boton_Edit.style.display='none';
}

function CambioNombre(TipoCambioNombre,num,bandera)
{
    if(bandera == 1 || event.keyCode==13)//KeyCode for Enter Key
    {
        console.log(TipoCambioNombre,num);
        if(TipoCambioNombre==0)//CambioNombreSeccion
        {
            var Input_guardar= document.getElementsByClassName("Titulo")[num].getElementsByTagName("b")[0];
            textoGuardar=Input_guardar.getElementsByTagName("input")[0].value;
            console.log(textoGuardar);
            
            Input_guardar.innerHTML=textoGuardar;
            var Boton_Edit = document.getElementsByClassName("Titulo")[num].getElementsByTagName("svg")[0];
            Boton_Edit.style.display='inline';

            //console.log(Input_guardar);
        }   
        else//CambioNombreCampos
        {

        }
    }
}

function CambioMenu(numeroMenu)
{
    var menu1=document.getElementById("NavBar").getElementsByTagName("li");
    console.log(menu1);

    console.log(document.getElementById("menu").getElementsByTagName("ul"));
   for(var i=0; i<menu1.length;i++)
   {
        menu1[i].getElementsByTagName("div")[0].style.backgroundColor="rgb(79, 79, 192)";
        document.getElementById("menu").getElementsByTagName("ul")[i].style.display='none';
   }
   document.getElementById("menu").getElementsByTagName("ul")[numeroMenu+1].style.display='block';
   document.getElementById("NavBar").style.display='block';
    menu1[numeroMenu].getElementsByTagName("div")[0].style.backgroundColor="rgba(102, 102, 236, 0.849)";
    
}
/*
function HolaMundo()
{
    console.log("Hola Mundo"),
}

*/
/*By Septimus*/ 