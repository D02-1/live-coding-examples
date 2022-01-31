// Wir importieren "dotenv" mit dem zusatz .config(); um unsere process.env mit unseren zusatz variablen auszustatten.
require("dotenv").config();

console.log("hello Word");

console.log(process.env.NAME);
console.log(process.env.AUTHOR);
console.log(process.env.CI);
console.log(process.env.CODE);
console.log(process.env.DB_USERNAME);
