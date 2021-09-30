/**
 * Destructuring
 * @description Destructuring bedeutet das wir elemente aus Arrays ud Objekten extrahieren, also herausnehmen können.
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Destrukturierende_Zuweisung
 * @see https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f
 * @example
 * [ value, value, ... ] = [ value, value, ... ]
 * @example
 * { key, key, ... } = { key, key, ... }
 */

// Logik:
// const { a: b, c, d = "e" } = object;
// in variablen:
// const a => b = object.a
// const c = object.c
// const d = "e";

// wir erstellen ein array mit werten:
const rgb = [ 255, 128, 200 ];

// red, green, blue
// const red = rgb[0];
const [ red, green, blue ] = rgb;
console.log("red:", red);
console.log("green:", green);
console.log("blue:", blue);
console.log(rgb);

console.log("=".repeat(50));

const userObject = 
{
    firstName: "Max",
    lastName: "Mustermann",
    age: 25
}

// wenn wir auf der linken seite die namen der schlüssel matchen, erstellen wir damit neue variablen
// const { lastName, firstName } = userObject;
// console.log(firstName, lastName);

const { firstName, age } = userObject;
console.log(firstName, age);

/*
function testFunction(obj)
{
    const { productKey } = obj;

    console.log(productKey);
}

testFunction({ productKey: "12345", user: "x",  });
*/

// Wenn wir auf der linken seite werte zuweisen, erstellen wir variablen mit default werten:
const fruitObject =
{
    fruit: "apple",
    color: "red",
}

const { fruit, color, taste = "sweet" } = fruitObject;

console.log("fruit:", fruit);
console.log("color:", color);
console.log("taste:", taste);

console.log(fruitObject);

console.log("=".repeat(50));

const carObject =
{
    brand: "Ford",
    model: "Kuga",
    year: 2019,
    wheels:
    [
        "FrontLeft",
        "FrontRight",
        "RearLeft",
        "RearRight"
    ]
}

// Wenn wir auf elemente in einem array zugreifen wollen, benennen wir die einzelnen indexposiitonen mit variablennamen:
const { brand, model, year, wheels, wheels: [ fl, fr, rl, rr ] } = carObject;

console.log(brand);
console.log(model);
console.log(year);
console.log(wheels);
console.log(fl, fr, rl, rr);

console.log("=".repeat(50));

// Wenn wir die vorhandenen schlüssel mit anderen variablennnamen überschreiben wollen, geben wir den veränderten namen einfach auf der rechten seite an:
const countryObject =
{
    city: "Berlin",
    name: "Germany"
}

const { name: countryName, city: countryCapitol } = countryObject;

console.log(countryName);

console.log("=".repeat(50));

let consoleName = "PlayStation";
let consoleBrand = "Sony";
let consoleYear = 2020;

console.log("Name:", consoleName);
console.log("Brand:", consoleBrand);
console.log("Year:", consoleYear);

const consoleObject =
{
    consoleName: "Xbox",
    consoleBrand: "Microsoft"
};

// Wenn wir unsere deklaration in klammern setzen, können wir die vorhandenen variablen mit den neuen werten aus dem objekt ersetzen.
({ consoleName, consoleBrand } = consoleObject);

console.log("Name:", consoleName);
console.log("Brand:",consoleBrand);
console.log("Year:", consoleYear);

console.log("=".repeat(50));

// Wir können arays auch returnen
function cars()
{
    return [ "VW", "Ford", "BMW" ];
}

// Wir können den variablen der array auch default werte zuteilen
const [ firstCar, secondCar, thirdCar, fourthCar = "Opel" ] = cars();
console.log(firstCar);
console.log(secondCar);
console.log(thirdCar);
console.log(fourthCar);

console.log("=".repeat(50));

// Einen wert können wir mit leeren kommas auslassen
const books =
[
    "Der Hobbit",
    "James Bond: Casino Royale",
    "Sherlock Homes: Der Hund von Baskerville"
];

const [ bookOne, , bookThree ] = books;
console.log(bookOne);
console.log(bookThree);

console.log("=".repeat(50));

// Ein sehr beliebter neuer operator seit ES6 ist der sogenannte "Rest" - Parameter oder Operator
const planets =
[
    "Merkur",
    "Erde",
    "Venus",
    "Melmac",
    "Pluto",
    "Vulcan"
];

const [ firstPlanet, secondPlanet, thirdPlanet, ...otherPlanets ] = planets;
console.log(firstPlanet);
console.log(secondPlanet);
console.log(thirdPlanet);
console.log(otherPlanets);

console.log("=".repeat(50));

// Wenn der ...(operator) auf der rechten seite steht, nennt man ihn den spread operator.
const users = 
[
    "Max",
    "James",
    "Henry",
    "Michael",
    "Richard"
];

const [ firstUser, secondUser, ...rest ] = [ ...users ];

console.log(firstUser);
console.log(secondUser);
console.log(rest);
