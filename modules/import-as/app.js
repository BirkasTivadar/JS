'use strict';
// Csak azt importáljuk, amire szükségünk van

// 3. módszer importálás más néven

import {
    user,
    username,
    numArr,
    sumValues as sum,
    subtractValues as sub
} from './module.js';
console.log(user);
console.log(username);
console.log(numArr);
console.log(sum(10, 15));
console.log(sub(20, 10));