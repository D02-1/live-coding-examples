/**
 * @method .forEach();
 * @description Die methode .forEach(); loopt durch eine array anhand einer funktion die jeden eintrag durchläuft und verarbeitet
 * @example
 * [ array ].forEach(function(wert) {});
 * @example
 * [ array ].forEach(wert => {});
 */

const fruits = [ "Orange", "Apple", "Strawberry" ];

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
    if(fruit === "Apple")
    {
        console.log(fruit);
    }
});


