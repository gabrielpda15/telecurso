//
// IF (Condição SE)
//

if (false) { /* não executa */ }

if (true) { /* executa */ }
else { /* não executa */ }

if (false) { /* não executa */ }
else { /* executa */ }

if (false) { /* não executa */ }
else if (true) { /* executa */ }
else { /* não executa */ }

//
// WHILE (Loop ENQUANTO)
//

while (true) { break; }

while (false) { }

var count = 3;
do { console.log(count); } while (--count > 0);

console.log();

count = 3;
while (--count > 0) { console.log(count); }

console.log('-------------------');

// 
// FOR (Loop PARA)
// 

for (let i = 3; i > 0; i--) {
    console.log(i);
}

console.log('-------------------');

//
// FOREACH (Loop PARA CADA)
// 

const array = ['abc', 'def', 'ghi'];

for (let valor of array) {
    console.log(valor);
}

for (let chave in array) {
    console.log(chave);
}

console.log();

const dicionario = {
    'abc': 1,
    'def': 54,
    'ghi': 32
}

console.log(Object.values(array)); // OF
console.log(Object.keys(array)); // IN
console.log(Object.values(dicionario)); // OF
console.log(Object.keys(dicionario)); // IN

console.log('-------------------');

// 
// SWITCH CASE (Condição SELECIONE CASO)
// 

const a = 4;

switch (a) {
    case 0:
        co0nsole.log('é 0');
        break;
    case 1:
        console.log('é 1');
        break;
    case 2:
        console.log('é 2');
        break;
    case 3:
        console.log('é 3');
        break;
    default:
        console.log('não é numero de 0 a 3');
}

console.log('-------------------');

//
// TRY CATCH (Tratamento de erros TENTE PEGUE)
//

function vaiDaErro() { throw 'isso é um erro' };

try {
    vaiDaErro();
    console.log('BANANA!');
} catch (err) {
    console.error(err);
} finally {
    console.log('finalmente!');
}

console.log('pós erro');
