// Switch

const car = 'Mercedes';

switch (car) {
    case 'BMW':
        console.log('BMW is good!');
        break;
    case 'Mercedes':
    case 'Mercedes-Benz':
        console.log('Mercedes is good');
        break;
    case 'Audi':
        console.log('Audi is GOAT!')
        break;
    default:
        console.log('Car is not BMW, Mercedes or Audi!')
    }