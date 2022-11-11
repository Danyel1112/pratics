'use strict';

const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador]');

let newNumber = true;

const atualizarDisplay = (texto) => {
    if (newNumber) {
     display.textContent + texto;
     newNumber = false;
    } else {
     display.textContent += texto;
    } 
}

const inserirNumero = (event) => atualizarDisplay(event);
numeros.forEach (numero => numero.addEventListener('click', inserirNumero));


const selecionarOperador = () => {
    newNumber = true;
}
operadores.forEach (operador => operador.addEventListener('click', selecionarOperador));