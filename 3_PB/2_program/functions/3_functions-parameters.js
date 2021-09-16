// Um daten und werte an eine funktion zu übergeben, können wir diese als parameter festlegen und dann mit dem funktionsaufruf übergeben. Dabei erstellen wir eine lokale variable, die den übergebenen wert beinhaltet.

//                   parameter
function showMessage(text)
{
    console.log(text);
}

// Beim funktionsaufruf fügen wir den gewollten wert ein.
showMessage('Ich bin eine Nachricht');
showMessage('Ich bin noch eine Nachricht');
showMessage('Ich bin eine nachricht aus dem weltraum');

console.log('='.repeat(50));

// Wir können auch beliebig viele werte an eine funktion übergeben, wenn wir diese mit einem komma trennen

// Übergeben:        user,     message
function chatMessage(benutzer, nachricht)
{
    // Auf die übergeben werte können wir zugreifen, und sie auch ändern
    benutzer = '===> ' + benutzer;

    console.log(benutzer, ': ', nachricht);
}

let user = 'Max';
let message = 'Hallo, wie geht es dir?';

// gibt an: benutzer, nachricht
chatMessage(user,     message);

user = 'Saeed';
message = 'Ach, mir geht es heute prima, ich esse gerade!';

chatMessage(user, message);

chatMessage('Fariha', 'Ich bin gerade fertig mit essen.');

console.log('='.repeat(50));

// Mit sogeannten default values können wir werte festlegen, die für variablen genutzt werden, bei denen wir keinen wert übergeben.
function chatMessageDefault(user, message = 'Der user hat nichts geschrieben')
{
    // theoretisch steht hier: message = message || "Der user hat nichts geschrieben";
    console.log(user, ": ", message);
}

const saeedsVariable = "Saeed";

chatMessageDefault(saeedsVariable);
chatMessageDefault(saeedsVariable, "Der user hat etwas geschrieben");

console.log('='.repeat(50));

// Eine funktion kann sich selber, rekursiv auch innerhalb des code blocks aufrufen:
function countDown(number)
{
    if(number === 0)
    {
        // Die funktion verlassen und etwas ausgeben, hier "nichts";
        return;
    }

    console.log(number);

    countDown(number - 1);
}

let kaese = 5;

countDown(kaese);

function countUp(number, max)
{
    if(number === max + 1)
    {
        return;
    }

    console.log(number);

    countUp(number + 1, max);
}

countUp(1, 5);
