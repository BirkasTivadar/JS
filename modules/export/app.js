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
/* 
import { user, username, numArr, sum, subtract } from './module.js';
console.log(user);
console.log(username);
console.log(numArr);
console.log(sum(10, 15));
console.log(subtract(20, 10));
*/

// Importálni is tudok más néven
/* 
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
*/

/* 
3. módszer Az összes modul importálása más néven:
ekkor egy Object-ként importálok mindent a module.js-ből, ami ott ki van jelölve export-ra, 
és ezért az Object-nek egy nevet kell adjak (itt MyMath), 
és a fájlon belül ezen Object-en keresztül tudom elérni
 */
import * as MyMath from './module.js';
console.log(MyMath.user);
console.log(MyMath.username);
console.log(MyMath.numArr);
console.log(MyMath.sumValues(10, 15));
console.log(MyMath.subtractValues(20, 10));