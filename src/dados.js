import animals from './animals'
//filtra especie
const filteredAnimals = animals.filter((animals)=>{
    return animals.idade === 3
})
console.log(filteredAnimals)

let toPrint= ''

//lista animais
filteredAnimals.forEach(especie =>{
    toPrint += especie.especie + ','
});

let idade = [2,3]