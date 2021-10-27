// var
// Declaração a nivel global, não constante

// let
// Declaração a nivel local, não constante

// const
// Declaração de constante

// function
// Declaração de função

var v1   = 'abc';
let v2   = 'abc';
const v3 = 'abc';

/*
 * v1 -> abc
 * v2 -> abc
 * v3 -> abc
 */

function f1() {
    var v1 = '123';
    let v2 = '123';
    /*
     * v1 -> 123
     * v2 -> 123
     * v3 -> abc
     */
}

f1();

/*
 * v1 -> 123
 * v2 -> abc
 * v3 -> abc
 */
