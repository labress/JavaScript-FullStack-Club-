
// Map , Filter e Reduce

// Map - mapeia um array para outro array, aplicando uma função a cada elemento do array original
// Filter - filtra um array, retornando apenas os elementos que satisfazem uma condição
// Reduce - reduz um array a um único valor, aplicando uma função acumuladora a cada elemento do array

const numbers = [1, 2, 3, 4, 5];

const numbersMutipliedByTwo = numbers.map(function(number){
    return number * 2;
}) ;


const ages = [18, 22, 17, 24, 13, 26];

//const evenAges = ages.filter(function(age){
//    return age % 2 === 0;});

const sumOfAges = ages.reduce(function(age, accumalator){
    return  accumalator + age;
}, 0);

console.log(sumOfAges);
