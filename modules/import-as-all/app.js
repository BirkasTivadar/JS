'use strict';
// Csak azt importáljuk, amire szükségünk van

/* 
4. módszer Az összes modul importálása más néven:
ekkor egy Object-ként importálok mindent a module.js-ből, ami ott ki van jelölve export-ra, 
és ezért az Object-nek egy nevet kell adjak (itt MyMath), 
és a fájlon belül ezen Object-en keresztül tudom elérni
 */
import * as MyMath from './module.js';
console.log(MyMath.user);
console.log(MyMath.username);
console.log(MyMath.numArr);
console.log(MyMath.sum(10, 15));
console.log(MyMath.sub(20, 10));