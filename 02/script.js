/*
    Solicite 2 números, faça a soma deles e
    apresente o resultado final ao usuário
*/

alert("Vamos Somar? Digite os números!");

let number1 = prompt("Digite o primeiro número:");
let number2 = prompt("Digite o segundo número:");
let result = Number(number1) + Number(number2);

alert(`A soma dos seus números é de: <-- ${result} -->`);
