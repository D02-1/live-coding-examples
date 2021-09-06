// Boolean

let testBool = true;

// WENN ETWAS WAHR IST... dann führe diesen fall aus
if(testBool)
{
    console.log('(Boolean) Dies ist wahr');
}
// SONST FÜHRE DIESEN FALL AUS
else
{
    console.log('(Boolean) Dies ist false');
}

// die folgende variable beinhaltet einen string, wenn dieser string mit text gefüllt ist, dann hat die variable einen inhalt. Wenn dort kein text steht... ist der inhalt "null", also garnix. Da der text GARKEINEN inhalt hat... kann man auf ihn auch nicht prüfen.

let testString = 'Dies ist ein string';

if(testString)
{
    console.log('(String) Dies ist wahr');
}
else
{
    console.log('(String) Dies ist falsch');
}

// Alle nummern über 0 und unter 0, sind true.
let testNummer = 0;

if(testNummer)
{
    console.log('(Nummer) Dies ist wahr');
}
else
{
    console.log('(Nummer) Dies ist falsch');
}

console.log("=".repeat(50));

let testStringName = "WasAnderes";

if(testStringName === false)
{
    testStringName = "Mustapha";
}
else
{
    testStringName = "Saeed";
}

console.log(testStringName);
