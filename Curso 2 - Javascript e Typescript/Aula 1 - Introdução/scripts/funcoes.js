function f1() {
    console.log('dentro da função 1');
}

function f2() {
    console.log('dentro da função 2');
    return 'retorno 2';
}

const f3 = () => { console.log('dentro do lambda 3'); };

const f4 = () => { console.log('dentro do lambda 4'); return 'retorno 4'; };

// LABDAS
(() => { console.log('dentro do lambda'); })();

() => true; // () => { return true; } // MESMA COISA
(teste) => true; // teste => true; // MESMA COISA
(teste, teste2) => { };

console.log(f1());
console.log(f2());
console.log(f3());
console.log(f4());

console.log('---------------------');

function f5(a) {
    console.log({a});
}

function f6(a, b) {
    console.log({ a, b });
}

function f7(...a) {
    console.log({a});
    console.log([...a]);
}

function f8(a, b = 2) {
    console.log({a, b});
} 

f5('teste');
f6('teste a', 'b teste');
f7('a', 'b', 'c');
f8(4, 3);
f8(4);

console.log('---------------------');

function f9(a, b) {
    a = 'banana';
    b = [];
}

function f0(a, b) {
    a.variavel = 'banana';
    b.push('banana');
}

let variavel = 'teste';
let objeto = { variavel };
let vetor = [ variavel ];

console.log({variavel, objeto, vetor});
f9(variavel, vetor);
console.log({variavel, objeto, vetor});
f0(objeto, vetor);
console.log({variavel, objeto, vetor});
