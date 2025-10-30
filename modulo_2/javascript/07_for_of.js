console.log("FOR OF");
const nombres =["JUan", "Juan","Pedro"];
for (const nombre of nombres){
    console.log("Hola", nombre);
}

///////////////////////////

const nombre = "Juan";
for (const letra of nombre){
    console.log("Letra", letra);
}

//////////////////////

numeros = [5,4,3,9,41];
a =0;
for ( const numero of numeros){
   if(numero > a) a=numero;
}
console.log("el mayor es:", a);

////////////////////////////////////////

const persona = {
    nombre: "Carlos",
    apellido: "Endara",
    profesion: "Profe"

}

for (const clave in persona){

    console.log("clave", clave, ": ", persona[clave] );
}

//////////////////////////// cuenta cuantas claves

const personas = {
    nombre: "Carlos",
    apellido: "Endara",
    profesion: "Profe"

}
m=0;
for (const clave in personas){

    console.log("clave", clave, ": ", personas[clave] );
    m++;
    console.log(clave);
}
console.log(m);
/////////////////////////////////////

