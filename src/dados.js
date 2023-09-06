import animals from './animals'

//map para criar um novo array com as idades dos animais
const idadesDosAnimais = animals.map(animal => animal.idade);
console.log(idadesDosAnimais);

//reduce para calcular o peso total de todos os animais
const pesoTotal = animals.reduce((total, animal) => total + animal.peso, 0);
console.log(pesoTotal);

//filter  para encontrar todos os animais da espécie 'canina'
const caninos = animals.filter(animal => animal.especie === 'canina');
console.log(caninos);

//forEach para imprimir informações de cada animal
animals.forEach(animal => {
    console.log(`Espécie: ${animal.especie}, Raça: ${animal.raça}, Idade: ${animal.idade}, Peso: ${animal.peso}`);
});
