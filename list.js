    // Listas

    const names = ['Felipe', 'Gabriel', 'Renan', 10 , false];

    const Gabriel = names[0];

    // names.push('João'); // push adiciona um elemento no final da lista

    names.unshift('Ana'); // unshift adiciona um elemento no inicio da lista
    names.unshift('Veigh');
    names.pop(); // pop remove o ultimo elemento da lista
    names.shift(); // shift remove o primeiro elemento da lista
    names.unshift('Veigh');

    names[2] = 'Maria'; // altera o elemento do indice 2 para 'Maria'
    
    // console.log(names.indexOf('Gabriel')); // indexOf retorna o indice do elemento 'Gabriel' na lista

    const sortedNames = names.sort(); // sort ordena a lista em ordem alfabética

    const namesIsArray = Array.isArray(names); // isArray verifica se a variável é uma lista

    console.log(names);
    console.log(sortedNames);
    console.log(namesIsArray);