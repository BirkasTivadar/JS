'use strict';

const age = 30;
const isDead = true;
const user = {
    firstName: 'Jane',
    lastName: 'Doe'
};

// szabad mixelni az export-ot és az export default-ot
export { age, isDead };
export default user;

// másik módszer
/* 
export const age = 30;
export const isDead = true;
export default {
    firstName: 'Jane',
    lastName: 'Doe'
};
 */