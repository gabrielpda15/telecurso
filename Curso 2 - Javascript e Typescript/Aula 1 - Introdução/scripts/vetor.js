const vetor = [];

// PUSH -> Insere no final
vetor.push('abc');
vetor.push('def');
vetor.push('ghi');
vetor.push('jkl');

console.log(vetor);

// UNSHIFT -> Insere no começo
vetor.unshift('mno');
vetor.unshift('pqr');

console.log(vetor);

console.log();

// PUSH E POP -> Empilhamento
console.log(vetor.pop()); // Ex: Lavar pratos
console.log(vetor);

console.log();

// PUSH E SHIFT -> Fila
console.log(vetor.shift()); // Ex: Fila de banco
console.log(vetor);

console.log();

console.log(vetor.some((item => item.includes('a')))); // ALGUM ELEMENTO POSSUI
console.log(vetor.every((item => item.length == 3))); // TODOS OS ELEMENTOS POSSUEM

console.log();

console.log(vetor.find(item => item.includes('a'))); // TRAZ "O" PRIMEIRO OBJETO QUE POSSUI
console.log(vetor.findIndex(item => item.includes('a'))); // TRAZ O "INDICE" DO PRIMEIRO OBJETO QUE POSSUI
console.log(vetor.indexOf('abc')); // TRAZ O PRIMEIRO "INDICE" DO OBJETO
console.log(vetor.indexOf('jkl')); // -1 -> ITEM NÃO EXISTE

console.log();

// FILTER

vetor.push('def');
const i = vetor.indexOf('abc');
vetor[i] = 'def';

console.log(vetor);
console.log(vetor.filter(item => item != 'def'));
console.log(vetor);

const j = vetor.indexOf('def');
vetor[j] = 'abc';

console.log(vetor);

console.log();

// SORT -> retorne um teste logico em que 
// SE a > b   |   r > 0
// SE a < b   |   r < 0
// SE a == b   |   r == 0
const vetorN = [ 5, 1, 8, 1, 4, 9, 1, 0, 5 ];
console.log(vetorN.sort((a, b) => a - b));
console.log(vetorN.sort((a, b) => b - a));

console.log();

// REDUCE

vetor.pop();
const z = vetor.shift();
vetor.push('jkl');
vetor.push(z);

const r = vetor.reduce((pv, cv) => {
    return pv + cv;
}, '');

console.log(r);
console.log(vetor.join(', '))
console.log(vetor);
