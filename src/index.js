'use strict';

function findGCD(a, b) {
    if (a <= 0 || b <= 0 || typeof(a) !== 'number' || typeof(b) !== 'number') {
        return 'Arguments must be positive integers.';
    }
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

console.log(findGCD(4, 16));
