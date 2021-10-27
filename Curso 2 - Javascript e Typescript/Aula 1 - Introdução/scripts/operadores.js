var a = 1;
var b = '1';
var c = 5;

console.log(a + b);
console.log(a - c);
console.log(a * b);
console.log(a / c);
console.log(a % c);

console.log('---------------------');

console.log(a > c);
console.log(b < a);
console.log(a <= b);
console.log(c >= a);
console.log(a == b);
console.log(a === b);
console.log(a != c);
console.log(a !== b);

console.log('---------------------');

var fun = function() { console.log('to aqui!'); return true; }

console.log(true && false && fun());
console.log(true || false || fun());
console.log('to fora!');
console.log(true && fun() && false);
console.log(2 | 4); // 2: 0010  4: 0100  R: 0110 (6)
console.log(2 & 4); // 2: 0010  4: 0100  R: 0000 (0)
console.log(5 & 4); // 2: 0101  4: 0100  R: 0100 (4)
console.log(!false);

// && (E):   ambos os lados devem ser verdadeiros 
// || (OU):  apenas um dos lados devem ser verdadeiros
//    (XOR): não existe xor no js, usar (a || b) && !(a && b)

console.log('---------------------');

var tmp = true ? 'teste' : 'banana';
console.log(tmp);
tmp = false ? 'teste' : 'banana';
console.log(tmp);

console.log();

tmp = null ?? 'teste';
console.log(tmp);
tmp = 'banana' ?? 'teste';
console.log(tmp);
tmp = true ?? 'teste';
console.log(tmp);

console.log('---------------------');

var count = 10;
console.log(count);
count = count - 2;
console.log(count);
count -= 2;
console.log(count);
count &= 4;
console.log(count);
count--;
console.log(count);
--count;
console.log(count);
console.log({ a: count--, b: --count });