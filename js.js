const h1 = document.querySelector('h1');
const form = document.querySelector('#formulario');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', btnOnClick);

function btnOnClick(event){
    event.preventDefault();
    var num1 = Number(input1.value);
    var num2 = Number(input2.value);
    const suma = num1 + num2;

    pResult.innerText = "Resultado: " + suma;
}







/*
PRUEBAS DE MANIPUPACION DEL DOM
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Hola <br> que tal?';
h1.innerText = 'Hola <br> que tal?';
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');
//h1.classList.toggle('verde');
//h1.classList.contains('verde');

input.value = "432";

const img = document.createElement('img');
img.setAttribute('src', 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/05/30/16538835957688.jpg');
console.log(img);

pid.innerHTML = ' ';
pid.append(img);
*/
