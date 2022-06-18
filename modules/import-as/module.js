'use strict';

// 3. módszer
const user = {
    name: 'John Doe',
    age: 30
};

const username = 'Jane Doe';

const numArr = [1, 2, 3, 4, 5];

const pi = 3.14 // amivel adott fájl-on belül dolgozom, de azon kívül nem, az nem kell exportálni
const sumValues = (x, y) => x + y * pi;
const subtractValues = (x, y) => x - y;

export {
    user,
    username,
    numArr,
    sumValues,
    subtractValues
};