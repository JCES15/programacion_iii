console.log("CONDICIONALES");
console.log("CONDICIONAL IF");
let temperatura = 45;
if(temperatura >30) {
    console.log("Hace Calor");
}

console.log("CONDICIONAL if else");
const password= "hola1234";
if (password == "hola1234"){
    console.log("Entraste");

}
else{
    console.log(" NO Entraste");
}

////////////////////////////////////
console.log("CONDICIONAL SWITH");
const dia = "Lunes";
switch(dia){
    case "Lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("Dia Laboral");
        break;
    case "sabado":
    case "Domingo":
        console.log("Fin de Semana");
        break;
    default:
        console.log("Dia No valido");
}