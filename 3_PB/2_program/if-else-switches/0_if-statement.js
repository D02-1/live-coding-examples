/**
 * IF Statement
 * @description Mit einem if-statement können wir bestimmen das etwas passiert, wenn ein bestimmter fall eintritt.
 */

// Beispielergebnis
const ergebnis = 5;
const name = "Ali";

console.log("=".repeat(50));

/**
 * If Vergleich
 */

// Das statement, das wir abfragen
if(ergebnis <= 5)
{
    // Code block anfang

    console.log('Ich werde nur angezeigt wenn das if statement zutrifft!');

    // Code block ende
}

/**
 * IF Vergleich mit logischem UND (Multiple vergleiche)
 */

//                Ein weiterer fall, der zutreffen muss (Logisches UND)
if(ergebnis === 5 && name === "Max")
{
    console.log('Ich werde angezeigt, wenn das ergebnis 5 ist, und der name Ali');
}

/**
 * IF Vergleich mit logischem ODER (Multiple vergleiche)
 */

//                Ein weiterer fall der zutreffen KANN, unabhängig vom ersten fall (Logisches ODER)
if(ergebnis === 5 || name === "Ali")
{
    console.log("Ich werde angezeigt, wenn das ergebnis 5 ist, ODER der name Ali ist");
}

// Als erstes wird geschaut, ob das erste vergleich stimmt, sollte das zutreffen, wird das if statement ausgeführt, wenn nicht, wird geschaut ob der zweite vergleich stimmt, sollte das zutreffen, wird das statement ausgeführt. Andernfalls nicht.

console.log('Ich werde immer angezeigt!');

// Noch ein beispiel

const istKuehlschrankVoll = false;

if(istKuehlschrankVoll === true)
{
    console.log('Heute muss ich nicht einkaufen.');
}

