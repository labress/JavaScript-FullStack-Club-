// Object

const person = {
    firstName: 'Gabriel',
    lastName: 'Labres',
    age: "23",
    hobbies: ['treinar', 'assistir lutas', 'ler livros'],
    dog: {
        name: 'Simba',
        breed: 'PitMonster',
        age: 3,
    }
};

// const firstName = person.firstName;
//const lastName = person.lastName;
// const age = person.age;
//const hobbies = person.hobbies;

// igual ao de cima mas usando destructuring 
const {firstName: primeiroNome, lastName, age, hobbies, dog: {name: dogName}} = person ;
const read = person.hobbies[2];


console.log(primeiroNome);
console.log(lastName);
console.log(person.age);
console.log(hobbies);

// person.dog = 'Simba'; // adiciona a propriedade 'dog' ao objeto 'person' com o valor 'Simba'

console.log(person.dog.age);
console.log(dogName);
