let parrafo = null;
const btnCrear=document.getElementById('crear');
const contenedor=document.getElementById('contenedor');
btnCrear.addEventListener('click',()=>
{
    parrafo=document.createElement('p');
    parrafo.textContent='Parrafo dinamico';
    parrafo.classList.add('parrafo');
    contenedor.appendChild(parrafo);
});

const btnEliminar = document.getElementById('eliminar');
btnEliminar.addEventListener('click',()=>
{
    const parrafos = document
        .getElementsByClassName('parrafo');
    Array.from(parrafos)
        .forEach(parrafo => parrafo.remove());
});
