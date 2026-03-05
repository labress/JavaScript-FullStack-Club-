// Progamação Orientada a Objetos POO

class Person {
    constructor(firstName, lastName, age){ 
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    }
    
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

    speak() {
        console.log('Hello World')
    }

}

const person = new Person("Jhon", 'Week', 43)
const person2 = new Person('Maria', 'Rose', 40)

person.getFullName();
person.speak();

