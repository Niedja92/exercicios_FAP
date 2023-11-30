// Crie um programa em JavaScript que contenha os seguintes tipos de funções: 
// 1. uma função tradicional com a palavra reservada "Function" e sem nenhum parâmetro; 
// 2. uma função tradicional com parâmetros e um retorno de valor; 
// 3. uma arrow function com parâmetros e que retorne um valor. 
// Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora.

/* Função tradicional com palavra reservada*/
function functionFunction() {
    console.log("Função sem parâmetros executada.");
}

/* Função tradicional com parâmetros e um retorno de valor*/
function soma(a, b) {
    return a + b;
}

/* Declarando a arrow function com parâmetros que retorna um valor*/
const subtracao = (a, b) => {
    return a - b;
}

/*Utilizando as funções*/
functionFunction();
console.log("Soma: ", soma(10,20));
console.log("Subtração: ", subtracao(100, 50));