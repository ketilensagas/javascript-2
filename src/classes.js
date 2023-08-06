const Animal = class {

    constructor(especie){
        this.especie = especie
    }

    falar= ()=> {
        console.log(this.especie + ' fala ')
    }

    comer= ()=>{
        console.log(this.especie + ' come ')
    }

    dormir= ()=>{
        console.log(this.especie + ' dorme ')
    }

}

export default class Cachorro extends Animal{
    falar= ()=> {
        console.log(this.especie + ' au au au')
    }

    comer= ()=> {
        console.log(this.especie + ' come ração ')
    }
}
