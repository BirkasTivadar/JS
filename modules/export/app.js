'use strict';
// Csak azt importáljuk, amire szükségünk van

// 1. módszer
/* 
import { user, username, numArr, sumValues, subtractValues } from './module.js';
console.log(user);
console.log(username);
console.log(numArr);
console.log(sumValues(10, 15));
console.log(subtractValues(20, 10));
 */

// 2. módszer
import { user, username, numArr, sum, subtract } from './module.js';
console.log(user);
console.log(username);
console.log(numArr);
console.log(sum(10, 15));
console.log(subtract(20, 10));