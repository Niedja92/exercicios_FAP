// Com os conceitos aprendidos, crie um programa de calculadora que: 
// - receba dois valores, que devem ser salvos em variáveis; 
// - o usuário deve colocar qual o operador ele vai utilizar por meio dos símbolos aritméticos; 
// - com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado; 
// - se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma.

let valor1 = Number(prompt("Digite o primeiro valor: "));
let valor2 = Number(prompt("Digite o primeiro valor: "));
let operador = prompt("Digite o operador (+, -, *, /): ");
let resultado;
let sobra;

if(operador === "+") {
    resultado = valor1 + valor2;
    console.log("O resultado da operação é: " + resultado);
} else if (operador === "-") {
    resultado = valor1 - valor2;
    console.log("O resultado da operação é: " + resultado);
} else if (operador === "*") {
    resultado = valor1 * valor2;
    console.log("O resultado da operação é: " + resultado);
} else if (operador === "/") {
    resultado = valor1 / valor2;
    sobra = valor1 % valor2;
    if(sobra !== 0) {
        console.log("O resultado da operação é: " + parseInt(resultado) + " e tem resto " + sobra);
    } else {
        console.log("O resultado da operação é: " + resultado);
    }    
} else {
    console.log("O operador é inválido!");
}