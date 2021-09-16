// Eine simple funktion
// function showMessage()
// {
//     console.log('Hello World!');
// }

// alternative:
// const showMessage = function()
// {
//     console.log('Hello World!');
// }

// weitere alternative
showMessage = function()
{
    console.log('Hello World!');
}

// Damit der codeblock einer funktion ausgeführt würd, machen wir einen sogenannten "FUNCTION CALL". Andernfalls wird der code nicht ausgeführt.
showMessage();
showMessage();
showMessage();
showMessage();

console.log('='.repeat(50));

// Eine funktion kann sich auch selber starten. Das nennt man eine rekursive funktion, dies können erreichen, indem wir hinter die funktion klammern setzen.

const recursiveFunction = function()
{
    console.log('Ich habe mich selber aufgerufen');
}();
