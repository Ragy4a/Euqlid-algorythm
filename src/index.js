'use strict';

function findGCD (a, b) {
    if (a < 0 || b < 0) {
        return 'Numbers must be positive.';
    }
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return `GCD of these numbers is ${a}.`;
};

console.log(findGCD(4, 16))