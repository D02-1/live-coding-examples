/**
 * @method .forEach();
 * @description Die methode .forEach(); loopt durch eine array anhand einer funktion die jeden eintrag durchläuft und verarbeitet
 * @example
 * [ array ].forEach(function(wert) {});
 * @example
 * [ array ].forEach(wert => {});
 */

const fruits = [ 'Orange', 'Apple', 'Strawberry' ];

// Wir rufen .forEach(); als methode für die array auf, .forEach(); liefert uns für jedes element in der array einen funktionsaufruf.
fruits.forEach(function(fruit, i)
{
    console.log('Frucht nummer: ' + i, 'Frucht name: ' + fruit);
});
// fruits.forEach((fruit, i) => console.log('Frucht nummer: ' + i, 'Frucht name: ' + fruit));

// Logik:
// eine arrow function rufen wir per variablen namen auf:
// const testFunktion = (wert) => {};
// Bei nur einem wert in der übergabe brauchen wir keinen klammern:
// const testFunktion = wert => {};
// wenn wir keinen variablen namen angeben, brauchen wir auch keine const, und erstellen somit eine unbenannte, anonyme funktion:
// wert => {};
// Da .forEach(); eine anonyme funktion ausführt, brauchen wir nur den wert, und den body der funktion.

fruits.forEach(fruit =>
{
    if(fruit === 'Apple')
    {
        console.log(fruit);
    }
});

console.log('='.repeat(50));

/**
 * @method .map();
 * @description 
 * Die Methode .map(); erstellt eine neue Array und befüllt diese mit den Daten die nach der ausführung der callback funktion mit jedem element der array zurück kommen
 * @example
 * [ array ].map(function(wert) {});
 * @example
 * [ array ].map((wert, index) => {});
 * @returns { Array }
 */

const numbers = [ 8, 16, 32, 64, 128, 256 ];

console.log('Vorher: ', numbers);

// Die methode .map(); geht die werte der array in der indexbasierend reihenfolge durch und kann mit jedem einzelnen wert arbeiten:
const newNumberList = numbers.map(number =>
{
    return number * 2;
});
// const newNumberList = numbers.map(function(number)
// {
//      return number * 2;
// });
// const newNumberList = numbers.map(number => number * 2);

console.log('Jeder wert multipliziert mit 2: ', newNumberList);
console.log('nachher: ', numbers);

const specificNumberList = numbers.map((number, i) =>
{
    if(i === 2)
    {
        return number * 5;
    }

    // Wenn der index nicht 2 ist, returne die original nummer
    return number;
});

console.log(specificNumberList);

console.log('='.repeat(50));

/**
 * Warum nutzen wir .map(); anstelle von .forEach(); wenn wir mit werten arbeiten wollen?
 * Die .forEach(); methode liefert undefined zurück, da wir die daten des arrays nur innerhalb der schleife benutzen können und nichts returnen.
 * Die .map(); methode liefert uns im gegensatz dazu als return ein neues Array zurück.
 */
console.log('vorher: ', numbers);

// mit .forEach();
const newNumberList2 = numbers.forEach(number =>
{
    return number * 2;
});

// mit .map();
const newNumberList3 = numbers.map(number =>
{
    return number * 2;
});
console.log('nachher: ', numbers);
console.log('mit .forEach();', newNumberList2);
console.log('mit .map();', newNumberList3);

console.log('='.repeat(50));

/**
 * @method .filter();
 * @description
 * Die Methode .filter(); filtert inhalte eines arrays anhand der callback funktion und gibt uns eine neue array aus, befüllt mit den positiv bewerteten elementen (also den gemachtchen elementen).
 * @example
 * [ array ].filter(wert => {});
 * @example
 * [ array ].filter((wert, index) => {});
 * @returns { Array }
 */

const drinks = [ 'coffee', 'tea', 'water', 'hot chocolate', 'beer', 'juice', 'cola', 'fanta', 'sprite', 'wodka', 'wine', 'whiskey' ];

const newDrunkenArray = drinks.filter(drink =>
{
    return drink[0] === 'w';
});

console.log('Elemente in drinks[]; die mit w anfangen');
console.log(newDrunkenArray);

const longestDrinksArray = drinks.filter(drink => drink.length > 5);

console.log('Elemente in drinks[]; die mehr als 5 buchstaben haben')
console.log(longestDrinksArray);

console.log("=".repeat(50));

/**
 * @method .reduce();
 * @description
 * Die methode .reduce(); reduziert die inhalte eines Arrays auf einen einzigen wert,
 * indem es zwei elemente (von links nach rechts) durch eine funktion vergleicht und auf den gewünschten wert reduziert.
 * Zum beispiel um die Summe oder den Durchschnitt von werten in einem Array zu finden.
 * @example
 * [ array ].reduce((accumulator, currentValue) => {});
 * @example
 * [ array ].reduce((accumulator, currentValue) => {}, initialwert);
 * @return { number }
 */

const someNumberArray = [ 12, 22, 8, 6, 7 ];

const sumOfSomeNumberArray = someNumberArray.reduce((firstValue, secondValue) =>
{
    return firstValue + secondValue;
});
console.log('Summe aller zahlen in someNumberArray[];', sumOfSomeNumberArray);

/**
 * Logik
 * 
 * | Iteration | Variablen                         | Aktion                   | Ergebnis |
 * |-----------|-----------------------------------|--------------------------|----------|
 * | 0         | firstValue = 0, secondValue = 12  | firstValue + secondValue | 12       |
 * | 1         | firstValue = 12, secondValue = 22 | firstValue + secondValue | 34       |
 * | 2         | firstValue = 34, secondValue = 8  | firstValue + secondValue | 42       |
 * | 3         | firstValue = 42, secondValue = 6  | firstValue + secondValue | 48       |
 * | 4         | firstValue = 48, secondValue = 7  | firstValue + secondValue | 55       |
 */

const arrayOfNumbers = [ 5, 8, 7, 11, -6 ];
const checkableNumber = 4;
const highestNumber = arrayOfNumbers.reduce((firstValue, secondValue) =>
{
    if(firstValue > secondValue)
    {
        return firstValue
    }
    else
    {
        return secondValue;
    }
}, checkableNumber);
// ^!!!!!!!!!!! (initialwert);

console.log("Höchste zahl in arrayOfNumbers[];", highestNumber);

/**
 * Logik:
 * | Iteration | Variablen                         | Aktion                   | Ergebnis   |
 * |-----------|-----------------------------------|--------------------------|------------|
 * | 0         | firstValue = 4, secondValue = 5   | 4 > 5                    | false = 5  |
 * | 1         | firstValue = 5, secondValue = 8   | 5 > 8                    | false = 8  |
 * | 2         | firstValue = 8, secondValue = 7   | 8 > 7                    | true  = 8  |
 * | 3         | firstValue = 8, secondValue = 11  | 8 > 11                   | false = 11 |
 * | 4         | firstValue = 11, secondValue = -6 | 11 > -6                  | true  = 11 |
 */

console.log("=".repeat(50));

/**
 * @method .find();
 * @description
 * Die Methode .find(); gibt den wert des ersten gefundenen elementes in einem array zurück.
 * Wenn kein eintrag gefunden wurde, bekommen wir undefined zurück
 * @example
 * [ array ].find((wert, index) => {});
 * @returns { value }
 */
const languages = [ "Turkish", "Greek", "German", "Spanish", "Russian" ];

const foundLanguage = languages.find((language, i) =>
{
    return language === "Spanish";
});

// const foundLanguage = languages.find(language => language === "Spanish");

console.log("Gesuchte sprache gefunden in languages[];", foundLanguage);

const inventory =
[
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "oranges", quantity: 0 },
    { name: "cherries", quantity: 6 },
    { name: "cherries", quantity: 5 }
];

// const inventoryResult = inventory.find(({ name }) => name === "cherries");
const inventoryResult = inventory.find(({ quantity }) => quantity === 0);
console.log(inventoryResult);

console.log("=".repeat(50));

/**
 * @method .every();
 * @description
 * Die Methode .every(); überprüft ob jedes element in einem Array einer kondition entspricht, und gibt false zurück, falls EIN WERT fehlschlagen.
 * @example 
 * [ array ].every(wert => {});
 * @returns { boolean } 
 */
const numbersList = [ -1, -2, -5, 20, 10, 25, 80 ];

const everyCheck = numbersList.every(number => 
{
    return number > 0;
});
console.log("JEDER WERT in numbersList[] ist größer als 0:", everyCheck);

console.log("=".repeat(50));

/**
 * @method .some();
 * @description
 * Die methode .some(); ist das gegenteil von .every(); und gibt true zurück sobald EIN EINZIGER WERT positiv getestet wurden
 * @example
 * [ array ].some(wert => {});
 */
const someCheck = numbersList.some(number => number > 0);
console.log("Ein oder mehrere werte in numbersList[]; sind größer als 0:", someCheck);

console.log("=".repeat(50));

/**
 * @method .sort();
 * @description
 * Die methode .sort(); sortiert elemente eines arrays aufsteigend, was darauf basiert, die elemente in strings zu verwandeln und dann in einer logischen sequenz zu vergleichen. Es nutzt dabei die UTF-16 code werte.
 * Es gibt ein neues, sortieres array zurück.
 * @example
 * [ array ].sort();
 * @example
 * [ array ].sort((a, b) => {});
 */
const monthsArray = [ 'March', 'Jan', 'Feb', 'Dec' ];
monthsArray.sort();
console.log(monthsArray);

const numbersArray = [ 1, 30, 4, 21, 10000 ];
numbersArray.sort();
console.log(numbersArray);

const newNumberArray = [ 4, 2, 5, 1, 3 ];
/*
    newNumberArray.sort(function(a, b)
    {
        return a - b;
    });
*/

newNumberArray.sort((a, b) => b - a);
console.log(newNumberArray);

const sortableObjectArray =
[
    {
        name: 'Max',
        age: 25
    },
    {
        name: 'James',
        age: 49
    },
    {
        name: 'Jonas',
        age: 21
    },
    {
        name: 'Henry',
        age: 56
    },
    {
        name: 'Bob',
        age: 16
    }
];

const newSortableArray = sortableObjectArray.sort((a, b) => a.age - b.age);
console.log(sortableObjectArray);
console.log(newSortableArray);

newSortableArray.sort((a, b) =>
{
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if(nameA < nameB)
    {
        return 1;
    }

    if(nameA > nameB)
    {
        return -1;
    }

    return 0;
});
console.log(newSortableArray);
