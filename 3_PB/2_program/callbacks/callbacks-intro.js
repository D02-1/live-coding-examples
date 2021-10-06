// Ein callback ist eine funktion, die innerhalb einer funktion aufgerufen wird und werte übergeben bekommt.
// Dies ermöglicht uns, nach einem funktionsaufruf, mit den werten aus einer funktion, in einem weiteren code block zu arbeiten.
// Dies macht vor allem bei asynchronen operationen sinn, bei denen wir auf werte warten, und sie danach erst verarbeiten können.

// Eine funktion zum addieren
const add = function(a, b)
{
    return a + b;
};

// Eine funktion zum multiplizieren
const multiply = function(a, b)
{
    return a * b;
};

// Eine funktion zum dividieren
const divide = function(a, b)
{
    return a / b;
}

// Die funktion calculator ruft eine der mathematischen funktionen als callback auf, und übergibt beide zahlen weiter.
//  funktion                            funktion die wir als callback übergeben
const calculator = function(num1, num2, callback)
{
    return callback(num1, num2);
}

console.log(calculator(4, 6, add));
console.log(calculator(2, 4, multiply));
console.log(calculator(4, 2, divide));

console.log("=".repeat(50));

// Wir können werte berechnen und dann den berechneten wert weiter geben an das callback

const consoleOutput = function(input)
{
    // benutzung des wertes
    console.log(input);
}

const testFunktion = function(num1, num2, callback)
{
    // berechnung
    const sum = num1 + num2;

    // übergabe
    callback(sum);
}

testFunktion(3, 5, consoleOutput);

// Wie bei .forEach(); und anderen methoden können wir im code-block direkt mit ausgewerteten daten arbeiten.

testFunktion(3, 5, (test) =>
{
    console.log(test);
});

console.log("=".repeat(50));

const arrFunction = function(callback)
{
   callback([ 1, 2, 3, 4, 5 ]);
}

arrFunction(arr =>
{
    console.log(arr);
});

console.log("=".repeat(50));

function greeting(name)
{
    console.log('Hello ' + name);
}

function getUser(name, callback)
{
    callback(name);
}

getUser("Rick", greeting);
