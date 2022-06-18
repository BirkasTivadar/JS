'use strict';

// 1. módszer
// ha kiteszem egy Object, variable, array, függvény, stb. elé az export kulcsszót, akkor más fájlokba be tudom importálni
/* 
export const user = {
    name: 'John Doe',
    age: 30
};

export const username = 'Jane Doe';

export const numArr = [1, 2, 3, 4, 5];

const pi = 3.14 // amivel adott fájl-on belül dolgozom, de azon kívül nem, az nem kell exportálni
export const sumValues = (x, y) => x + y * pi;
export const subtractValues = (x, y) => x - y;
 */

// 2. módszer
/* 
megtehetem, hogy a végén gyűjtöm össze, amiket exportálni akarok,
DE nem lehet duplikáció (a kódon belül is kiteszem az export-ot, meg a végén is)
*/
const user = {
    name: 'John Doe',
    age: 30
};

const username = 'Jane Doe';

const numArr = [1, 2, 3, 4, 5];

const pi = 3.14 // amivel adott fájl-on belül dolgozom, de azon kívül nem, az nem kell exportálni
const sumValues = (x, y) => x + y * pi;
const subtractValues = (x, y) => x - y;
// ez esetben akár más néven is tudom exportálni, de ez esetben ilyen néven kell importálni, és használni is
export {
    user,
    username,
    numArr,
    sumValues as sum,
    subtractValues as subtract
};