/*
    ** Jogo da advinhação **

    Apresente a mensagem ao usuário:
    "Advinhe o número que estou pensando? Está entre 0 e 10"

    Crie uma lógica para gerar um número aleatório
    e verificar se o número digitado é o mesmo que o aleatório gerado
    pelo sistema.

    Enquanto o usuário não adinhar o número, mostrar a mensagem: 
    "Errou, tente novamente:"

    Caso o usuário acerte o número, apresentar a mensagem:
    "Parabéns! Você adivinhou o número em x tentativas"

    Substitua o "x" da mensagem, pelo número de tentativas

*/

let start = prompt("Advinhe o número que estou pensando? Está entre 0 e 10");

const randomNumber = Math.round(Math.random() * 10);

let xAttempts = 1;

while (Number(start) != randomNumber) {
  start = prompt("Errou, tente novamente:");
  xAttempts++;
}

if (xAttempts > 1) {
  alert(
    `Parabéns! O número que eu pensei foi ${randomNumber} e você adivinhou o número em ${xAttempts} tentativas`
  );
} else {
  alert(
    `Parabéns! O número que eu pensei foi ${randomNumber} e você adivinhou o número em ${xAttempts} tentativa`
  );
}
