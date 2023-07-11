/*
    Solicitar o nome do aluno e as 3 notas 
    do bimestre calcular a média daquele aluno

    A média positiva deverá ser maior que 6

    Se o aluno passou no bimestre, dar os 
    parabéns.

    Se o aluno não passou no bimestre, 
    motivar o aluno a dar seu melhor na prova
    de recuperação.
    
    Em ambos os casos, mostre uma menssagem com
    o nome do aluno e a nota.
*/

let student = prompt("Diga-me seu nome aluno:");

let studentGrade1 = prompt("Digite a nota do primeira prova:");
let studentGrade2 = prompt("Digite a nota do segunda prova:");
let studentGrade3 = prompt("Digite a nota do terceira prova:");

let avarage =
  (Number(studentGrade1) + Number(studentGrade2) + Number(studentGrade3)) / 3;

avarage = avarage.toFixed(1);

if (avarage > 6) {
  alert(
    `Parabéns ${student}, você foi demais! Sua média do bimestre foi de ${avarage} :D`
  );
} else {
  alert(
    `Poxa ${student}, infelizmente você tirou uma nota baixa. Sua média do bimestre foi de ${avarage}, mas sempre há a prova de recuperação. Tente o seu melhor! :)`
  );
}
