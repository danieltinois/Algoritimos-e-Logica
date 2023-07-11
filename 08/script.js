/*
    Crie uma lista de pacientes

    Cada paciente dentro da lista, deverá conter
        nome
        idade
        peso
        altura

    Escreva uma lista contendo o nome dos pacientes 
*/

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name: "Bruno",
    age: 28,
    weight: 75,
    height: 172,
  },
  {
    name: "Daniel",
    age: 18,
    weight: 85,
    height: 194,
  },
];

let patientsNames = [];

for (let patient of patients) {
  patientsNames.push(patient.name);
}

alert(patientsNames);
