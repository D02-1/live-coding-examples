// eine callback funktion schreiben wir, indem wir in unseren funktionsparametern dafür einen schlüssel anlegen, und diesen innerhalb der funktion als funktion aufrufen und ihm werte übergeben:
const testFunktion = (data, callback) =>
{
    const newData = data * 10;

    callback(newData);
    
    // eine callback funktion kann auch ein return haben (wie zb. Array.map(); )
    return "ich funktioniere";
};

// wir können der funktion daten übergeben, und danach das callback ausführen:
testFunktion(15, (ergebnis) =>
{
    console.log(ergebnis);
});

// da unsere funktion auch ein return hat, können wir auch per console.log(); etwas ausgeben:
console.log(testFunktion(15, (ergebnis) =>
{
    console.log(ergebnis);
}));
