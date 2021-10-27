var count = 0;

function main() {
    count = count + 1;
    console.log('teste!');
}

main();

const modulo = require('./scripts/modulo');
modulo.teste();
console.log(modulo.pi);

const { teste, pi } = require('./scripts/modulo');
teste();
console.log(pi);