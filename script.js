/*
    Dada uma lista de pacientes, descubra o IMC de cada 
    paciente e imprima

    "Paciente X possui o IMC de: Y"

    Onde X é o nome do paciente e Y é o IMC desse paciente

    Crie uma função para fazer o cálculo de IMC

*/

// Calculo IMC peso / (altura * altura)

const patients = [
  {
    name: "Junior",
    age: 22,
    weight: 70,
    height: 160,
  },
  {
    name: "Breno",
    age: 29,
    weight: 90,
    height: 180,
  },
  {
    name: "Lucas",
    age: 18,
    weight: 86,
    height: 194,
  },
];

const IMC = (weight, height) => {
  return (weight / (height / 100) ** 2).toFixed(2);
};

const printPatientIMC = (patient) => {
  return `Paciente ${patient.name} possui o IMC de: ${IMC(
    patient.weight,
    patient.height
  )}`;
};

for (let patient of patients) {
  let IMCMessage = printPatientIMC(patient);
  alert(IMCMessage);
}
