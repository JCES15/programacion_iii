try{
    const user = JSON.parce('{"name":"pedro", edad:25}');

}catch(e){
    console.log("Error detectado:", e.message);
}

///////////////////////////////////////////////////
try{
    console.log("Intentando abrir archivo ...");
    throw new Error('Archivo No encontrado');

}catch(error){
    console.log("Error ", error.message);
}
finally {
    console.log("Finalizo el intento de abrir el archivo");
}
