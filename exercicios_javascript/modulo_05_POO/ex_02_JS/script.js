// Utilizando a linguagem JavaScript, crie uma situação matemática na qual os números precisam ser informados pelo usuário. Além disso, deve ocorrer uma exceção dentro do código. Utilize os métodos try(), catch(), e finally() para realizar a captura e o tratamento dessa exceção.

function getUserInput(inputType) {
    try {
        const userInput = prompt(`Digite um número ${inputType}`);

        if (userInput === null || userInput === '') {
            throw new Error("Nenhum valor inserido");
        }

        const numberInput = parseFloat(userInput);

        if (isNaN(numberInput)) {
            throw new Error("Valor inserido não é um número");
        }

        return numberInput;
    } catch (error) {
        console.error(`Ocorreu um erro: ${error.message}`);
    } finally {
        console.log("Processo finalizado");
    }
}

function calculateResult(num1, num2) {
    const result = num1 * num2;
    console.log(`O resultado da multiplicação é: ${result}`);
}

function startProcess() {
    const num1 = getUserInput('1');
    const num2 = getUserInput('2');

    if (num1 !== undefined && num2 !== undefined) {
        calculateResult(num1, num2);
    }
}

startProcess();