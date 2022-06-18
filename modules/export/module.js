'use strict';

// ha kiteszem egy Object, variable, array, függvény, stb. elé az export kulcsszót, akkor más fájlokba be tudom importálni
export const user = {
    name: 'John Doe',
    age: 30
};

export const username = 'Jane Doe';

export const numArr = [1, 2, 3, 4, 5];

export const sumValues = (x, y) => x + y;
export const subtractValues = (x, y) => x - y;