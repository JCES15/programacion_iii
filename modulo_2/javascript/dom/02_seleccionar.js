const titulo=document.getElementById('titulo');
console.log(titulo.textContent);
const notas = document.getElementsByClassName('notas');
Array.from(notas)
    .forEach(nota=>console.log(nota.textContent));
const item = document.getElementsByIdClassName('item');
    Array.from(item)
        .forEach(item=>console.log(item.textContent));
const nota=document.getElementsByName('notaName');
Array.from(notaNames)
    .forEach(nota=>console.log(nota.textContent));
