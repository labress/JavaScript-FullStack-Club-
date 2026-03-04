// JSON

const todos = [{
    id: 1,
    description: 'Estudar JavaScript',
    iscComplete: false,

},
{
    id: 2,
    description: 'Fazer exercícios',
    isComplete: false,
},
{
     id: 3,
    description: 'Ler',
    isComplete: false,
}
]

const todosJSON = JSON.stringify(todos);
const todosList = JSON.parse(todosJSON);

console.log(todosJSON);
console.log(todosList);
