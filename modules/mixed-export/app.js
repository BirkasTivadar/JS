'use strict';
// mixed-export-nál kötelezően először a default-ot adom meg az import

import user, { age, isDead } from './module.js';

console.log(user);
console.log(user.firstName);
console.log(user.lastName);
console.log(age);
console.log(isDead);