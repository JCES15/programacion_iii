console.log("ciclos o bucles");
console.log("while");

let i= 1;
while(i<=3){
    console.log("contador: ", i);
    i++;
}
let valores=[3,4,-2,4,5];
indice =0;
while (valores [indice]>0){
    console.log("valor valido:", valores [indice]);
    indice++;

}

let n=1;
while(n<10){
    if(n%2!==0){
        console.log(n, "Es impar:");
        

    }
    n++;
}

let x=3;
do {
    console.log("interacion", x);
    x++;
}
    while(x<5);
////////////////////////////////////
let contador =1;
suma=0;
do{
    suma+=contador;
    contador++;
}
while(contador<=5);
console.log("la suma es:", suma);

////////////////////////////////////////

let reduccion=15;
do{
console.log("reduccion :", reduccion)
reduccion--;
}
while(reduccion>=0);
//////////////////////////////////

let a =1;
let b=6;
do{
    console.log("tabla del 6 :", b*a)
    a++;
}
while(a<=10);

///////////////////////

console.log("FOR OF");
const nombres =["JUan", "Juan","Pedro"];
for (const nombre of nombres){
    console.log("Hola", nombre);
}

///////////////////////////