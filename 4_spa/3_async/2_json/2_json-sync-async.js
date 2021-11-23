/**
 * Eine bessere methode ist, wenn wir per FILE-SYSTEM Library die datei lesen, denn dann haben wir die wahl:
 * - Wollen wir die datei konvertieren?
 * - Wollen wir dass das programm stoppt bis die datei geladen ist? ODER
 * - Wollen wir dass das programm weiter läuft, während die datei geladen wird?
 * 
 * Ausserdem wird, wenn sich die daten der datei ändern, die datei automatisch neu eingelesen und die information angepasst.
 */

// Wir importieren die bibliothek "fs" (file-system):
const fs = require('fs');

/**
 * @method fs.readFileSync();
 * @description die methode .readFileSync(); liest eine datei ein, und wartet mit der ausführung des programmes, bis diese datei geladen wurde.
 * @param { string } path - der pfad zur datei
 * @returns { buffer } der inhalt der datei, in bytes.
 */

// Wir lesen die datei ein:
const jsonFile = fs.readFileSync('./beispiel.json');

// Der komplette dateiinhalt wird in den speicher des computers geladen, das bedeutet, das bei großen dateien, das lesen sehr lange dauern kann, und das programm für eine merkbare zeit (sekunden, minuten...) nicht weiter arbeitet. Die gelesene Datei können wir als eine ansammlung von bytes in der konsole sehen:
console.log(jsonFile);

// Wir konvertieren den dateiinhalt zu einem JavaScript Objekt:
const jsonData = JSON.parse(jsonFile);

// Jetzt können wir die daten als JavaScript objekt nutzen:
console.log(jsonData.name);
console.log(jsonData);

console.log("=".repeat(50));

/**
 * @method fs.readFile();
 * @description Im gegensatz zur methode .readFileSync(); blockiert die methode .readFile(); das programm nicht, sondern arbeitet sofort weiter, während es weiterhin im hintergrund an der auslesung der Datei arbeitet. Die callback funktion der methode wird dann ausgeführt, wenn die datei fertig geladen wurde.
 * @param { string } path - der pfad zur datei
 * @callback function wird ausgeführt wenn die datei geladen ist
 */

let isLoading = true;

// Um zu überprüfen, wann welcher teil des codes ausgeführt wird, erstellen wir ein paar console.logs(); in unserem code:
console.log("position", 1, isLoading);

fs.readFile('./beispiel.json', function(error, data)
{
    isLoading = false;
    console.log("position", 2, isLoading);
    console.log(JSON.parse(data));
});

console.log("position", 3, isLoading);

// Das bedeutet, dass das programm weiter arbeitet, während es die datei einliest. Dies ermöglicht uns zum beispiel das anzeigen von ladebalken, wenn man zum beispiel innerhalb des callbacks einen boolean dafür setzt.

console.log("=".repeat(50));

// Da die methode uns einen inhalt zurückgibt, auch wenn die datei fehler beinhaltet, sollten wir in sollchen fällen try/catch nutzen. um die kaputte json datei abzufangen.
// mit try/catch
fs.readFile('./beispiel-kaputt.json', function(error, data)
{
    let newData;

    if(data)
    {
        try
        {
            newData = JSON.parse(data);
        }
        catch(error)
        {
            console.log(error);
            newData = "error";
        }
    }

    console.log(newData);
});

console.log("Hallo Welt!");