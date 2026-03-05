// Progamação Orientada a Objetos POO

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} made some noide!`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log(`${this.name} barks!`);
    }
}
const animal = new Animal('Simba');
const dog = new Dog ('Rex');

animal.speak();
dog.speak(); 
