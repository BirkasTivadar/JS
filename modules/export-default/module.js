'use strict';

// export default-ot akkor használom, ha csak egy valamit szeretnék csak exportálni

const person = {
    firstName: 'John',
    lastName: 'Doe',
};
export default person;

// export default-ból egy fájlon belül csakis egy darab lehet

// másik módszer, nem javasolt, ilyenkor az importban bármilyen nevet adhatok neki
/* 
export default {
    firstName: 'John',
    lastName: 'Doe',
};
 */