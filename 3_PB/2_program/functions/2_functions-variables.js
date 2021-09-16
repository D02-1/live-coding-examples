// Eine variable die wir innerhalb einer funktion, oder eines code-blocks anlegen, nennt sich lokale variable und ist nur in diesem code block nutzbar/verfügbar.

function showMessage()
{
    const message = "Ich bin eine lokale variable";

    console.log(message);
}

showMessage();

console.log('='.repeat(50));

// Eine funktion kann aber auch auf externe variablen zugreifen UND kann diese auf verändern.
let userName = "Max";

function welcomeMessage()
{
    userName = "John";

    console.log(2, userName);
}

console.log(1, userName);

welcomeMessage();

console.log(3, userName);

console.log('='.repeat(50));

// Innerhalb von funktionen können wir die gleichen variablennamen nutzen, wie ausserhlab, da wir innerhalb der funktion so einen lokale variable erstellen.

const value = 5;
console.log('Value: ', value);

function changeValue()
{
    const value = 10;
    console.log('Value: ', value);
}

changeValue();

console.log('Value: ', value);
