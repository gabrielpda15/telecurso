var a = 156; // number
var b = 2.55; // number
var c = 'teste!'; // string
var d = true; // boolean
var e = function() {  }; // function
var f = { fa: 20, fb: 'banana' }; // object
var g = [ 'abc', 'def', 'ghi' ]; // object array

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof f.fc);
console.log(typeof g);
console.log(Array.isArray(g));
console.log(g[1]);
console.log(undefined == null);
console.log(undefined === null);
console.log('-----------------------');
console.log(f.fc == undefined);
console.log(f.fc == null);
console.log(f.fc === undefined);
console.log(f.fc === null);
console.log(typeof f.fc == 'undefined');
