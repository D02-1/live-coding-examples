/**
 * IF/ELSE Statement
 * @description Mit einem if/else-statement können wir bestimmen das etwas passiert, wenn ein bestimmter fall eintritt, oder etwas andere passiert, wenn dieser fall nicht eintritt.
 */

const today = 'Mittwoch';

if(today === 'Montag')
{
    console.log('Ich brauche mehr kaffe...');
}
else
{
    console.log('Bald ist wochenende');
}

// Das else statement wird nur ausgeführt, wenn das if statement false zurückgibt.

console.log("=".repeat(50));

/**
 * IF/ELSE IF
 * @description Mit einem if/else if können wir bestimmen das sowohl bei einem zutreffenden vergleich,wie auch bei einem weiteren vergleich, etwas passiert, oder ausgeführt wird.
 */

if(today === 'Montag')
{
    console.log('Ich brauche mehr kaffee...');
}
else if(today === 'Dienstag')
{
    console.log('Mein kaffee ist alle... :(');
}
else if(today === 'Mittwoch')
{
    console.log('Oh, heute ist ja mittwoch :O');
}
else
{
    console.log('Ich muss unbedingt kaffe einkaufen!');
}

console.log("=".repeat(50));

const loggedIn = true;

if(loggedIn === true)
{
    console.log('... Eingeloggt');
}
else
{
    console.log('... Gesperrt');
}
