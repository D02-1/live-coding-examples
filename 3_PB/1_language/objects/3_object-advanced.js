
// Wir können properties auch sonderzeichen oder zahlen geben, den schlüssel mit sonderzeichen geben wir dann als string ein.
const testObject =
{
    isAdmin: false,
    "hallo!": [ "erster Wert", "zweiter Wert" ],
    "ist fahrbereit": true,
    222222: 5,
    true: "hallo"
}

// Hierbei ist es zwingend notwendig das wir die [] pattern benutzen um den schlüssel anzusprechen.
console.log(testObject.isAdmin);
console.log(testObject[ "hallo!" ]);
console.log(testObject[ "ist fahrbereit" ]);
console.log(testObject[ 222222 ]);
console.log(testObject.true);

const neuerWert = testObject[222222];
console.log(neuerWert);

const gesuchterEintrag = "isAdmin";

console.log(testObject[ gesuchterEintrag ]);
console.log(testObject.isAdmin);
