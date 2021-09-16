// const beispielFunktion = function()
// {
//     console.log('Ich bin eine funktion');
// }

// function beispielFunktion()
// {
//     console.log('Ich bin eine funktion');
// }

// Eine kürzere, moderne methode um funktionen zu schreiben ist die sogenannte arrow-function:
const beispielFunktion = () =>
{
    console.log('Ich bin eine funktion');
}

beispielFunktion();

// console.log('='.repeat(50));

// Bei einem simplen kommando innerhalb der funktion, also nur einer zeile im codeblock können wir die klammern auch weglassen, und den code so angenehm verkürzen.
// const divider = () => console.log('='.repeat(50));
// seit kurzem können wir sogar das const weglassen.
divider = () => console.log('='.repeat(50));

divider();

// Eine arrow function mit nur einem statement hat automatisch einen rückgabewert und benötigt dafür kein return.

returnText = () => 'Hallo Welt';

console.log(returnText());

returnNumber = () => 5 + 7;

// alternativ:
// function returnNumber()
// {
//     const ergebnis = 5 + 7;
//     return ergebnis;
// }

console.log(returnNumber());

divider();

// Einer arrow function können wir, genau wie einer normalen funktion werte übergeben. wenn wir nur einen wert haben, brauchen wir auch keine klammern.

// showMessage = (userName) => console.log('Hallo', userName);
// oder:
showMessage = userName => console.log('Hallo', userName);

// Bei einer arrow-function mit nur einem parameter, können wir wie gesagt, die klammern sparen, das sieht wie folgt aus:

// funktionsname     parameter      code-block
// showMessage =     userName    => console.log('Hallo', userName);

// Theoretisch gleich zu:
// function showMessage(userName)
// {
//     console.log('Hallo', userName);
// }

showMessage('Max');

divider();

//                           return `Hallo ${ user }`;
pschemekFunktion = (user) => `Hallo ${ user }`;

const test = pschemekFunktion('Rick');

console.log(test);