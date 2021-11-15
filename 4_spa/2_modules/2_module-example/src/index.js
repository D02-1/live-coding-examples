const randToken = require('rand-token');
const Petals = require('petals');

const token = randToken.generate(16);

const petalsTest = new Petals('{"firstName": "John", "lastName": "Doe"}');

console.log(petalsTest.JsonToXml());

console.log(token);
