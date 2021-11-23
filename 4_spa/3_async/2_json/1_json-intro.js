// JSON ist ein text-datenformat das der javascript object syntax folgt, obowhl es dieser syntax folgt, kann es auch ausserhalb von javascript benutzt werden. Viele programmiersprachen und tools besitzen die fähigkeit json zu lesen oder zu schreiben, weswegen es sich sehr gut eignet um konfigurationen für programme oder entwicklungsumgebungen zu definieren. JSON dateien erkennt man an der dateiendung .json.

// Da json dokumente aus text bestehen, müssen sie für javascript erst zu einem objekt umgewandelt werden, oder von javascript aus zu json umgewandelt werden, dafür besitzt JavaScript das sogenannte JSON object, mit diesem kann man PARSEN (json zu javascript umwandeln) und stringifien (von Javascript zu JSON umwandeln).

// JSON Bearbeiten

/**
 * @method JSON.parse();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
 * @description Die methode .parse(); konvertiert einen string zu JSON, es ist sehr wichtig das dieser string sich an die JSON syntax hält.
 * @param { string } string - der JSON string den wir zu einem Objekt umwandeln wollen
 * @returns { object } das umgewandelte JavaScript Object mit JSON syntax
 */

// Wir erstellen einen beispielstring...
const jsonParseExample = '{ "isValid": true, "amount": 15, "name": "Max" }';

// ... und nutzen die methode .parse(); um den string zu einem Objekt zu konvertieren.
const convertedJson = JSON.parse(jsonParseExample);

// jetzt könnenn wir auf die daten wie bei einem objekt zugreifen:
console.log(convertedJson.isValid);
console.log(convertedJson.name);
console.log(convertedJson);

console.log("=".repeat(50));

/**
 * @method JSON.stringify();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
 * @description Die methode .stringify(); konvertiert ein Javascript Objekt zu einem JSON kompatiblen string.
 * @param { object } value - Das objekt das wir umwandeln wollen
 * @param { array } replacer - Optional kann man hier ein array angeben, das bestimmt, welche werte bei der konvertierung übernommen werden
 * @param { number } space - Die die anzahl von leerzeichen zim string am anfang des parameters zu bestimmen
 * @returns { string } Der JSON kompatible string
 */

// Wir erstellen ein Objekt...
const objectExample = {
    firstName: "Max",
    lastName: "Mustermann",
    age: 25,
    isAdmin: false
}

console.log(objectExample);

// ... und konvertieren dieses objekt per .stringify(); zu einem JSON kompatiblen string
const convertedObject = JSON.stringify(objectExample);
console.log(convertedObject);

// Erweitertes Beispiel:
//                                      OBJEKT         WERTE                 LEERZEICHEN (oder '\t' für TAB)
const convertedObject2 = JSON.stringify(objectExample, ["firstName", "age"], 4);
console.log(convertedObject2);

// Um leerzeichen anzugeben, aber keine werte zu bestimmen, können wir im replacer "null" setzen.
const convertedObject3 = JSON.stringify(objectExample, null, 4);
console.log(convertedObject3);

// JSON Datei

/*
Wir erstellen eine JSON Datei, beispiel.json und füllen sie mit ein paar informationen:

{
    "name": "Michael Knight",
    "car": "KITT"
}

Wie schon erwähnt ähnelt JSON der javascript object syntax, booleans nummern und strings und objekte und Arrays können wir ohne probleme in JSON nutzen, der einzig sichtbare unterscheid ist, das wir parameterschlüssel auch als string hinterlegen müssen, also mit "gänsefüßchen".
*/

console.log("=".repeat(50));

// JSON Dateien laden

// Um eine lokale JSON datei zu laden, reicht es wenn wir sie per .require(); oder import anfordern
const jsonFile = require('./beispiel.json');

// Durch diese methode wird die datei automatisch sogar in ein JavaScript objekt umgewandelt, und wir könenn die daten jetzt direkt nutzen wie bei einem objekt:
console.log(jsonFile);
console.log(jsonFile.car);

// Dieser weg wird NICHT empfohlen, wa während des ladens der JSON datei das programm nicht weiter läuft und änderung in der datei auch nicht mitbekommt.
