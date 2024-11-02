const crypto = require('crypto');

console.log("Generating secret key...");

const secretKey = crypto.randomBytes(64).toString('hex');

console.log("Your secret key:", secretKey);
