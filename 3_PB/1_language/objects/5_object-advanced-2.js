/**
 * @method Object.assign();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * @description Die Methode Object.assign(); kopiert proterties von einem Objekt und fügt sie einem zielobjekt hinzu.
 * @param { object } Das Zielobjekt
 * @param { object } Das Inputobjekt
 * @returns { object } Das veränderte Zielobjekt
 */

// Wir legen 2 objekte an, ein zielobjekt und ein anderes objekt.
const zielObjekt = { a: 1, b: 2 };
const anderesObjekt = { c: 3, d: 4 };

console.log("Original Zielobjekt:", zielObjekt);

// Wir nutzen Object.asign(); um beide objekte am zielobjekt zu verbinden.
const newObject = Object.assign(zielObjekt, anderesObjekt);

// Das zielobjekt und unsere neue variable haben den gleichen inhalt
console.log("Neue kopie vom zielobjekt", newObject);
console.log("Verändertes zielobjekt:", zielObjekt);

// Wir legen ein neues Objekt an:
const nochEinObjekt = { a: 5, d: 2, e: 12 };

// Wenn wir jetzt das neue Objekt mit unserem zielobjekt verbinden, überschreiben wir die vorhanderen werte:
Object.assign(newObject, nochEinObjekt);

console.log("zielobjekt", zielObjekt);
console.log("newObject", newObject);

console.log("=".repeat(50));

/**
 * @method Object.entries();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 * @description Die Methode Object.entries(); gibt jedes key und value paar der properties eines objektes als array zurück.
 * @param { object } Das objekt, dessen properties wir auslesen wollen
 * @return { Array } Ein neues Array
 */

const objectEntries = Object.entries(zielObjekt);
console.log(objectEntries);

/*
schlüssel, wert
[
    [ 'a', 5 ], 
    [ 'b', 2 ], 
    [ 'c', 3 ], 
    [ 'd', 2 ], 
    [ 'e', 12 ]
]
*/

console.log("=".repeat(50));

/**
 * @method Object.fromEntries();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
 * @description Im gegenteil zu Object.entries(); erstellt die methode Object.fromEntries(); auf basis des Array konstruktes im eben gezeigten format mit keys und values ein neues objekt.
 * @param { Array } Das array zur erstellen des objektes
 * @returns { object } Das erstellte Objekt
 */

const testArray =
[
//  key: value,
    [ "a", true ],
    [ "b", { test: 5 } ]
];

console.log("testArray:", testArray);

const newObjectFromEntries = Object.fromEntries(testArray);
console.log("newObjectFromEntries:", newObjectFromEntries);

/*
{ 
    a: true, 
    b:
    { 
        test: 5
    }
}
*/

console.log("=".repeat(50));

/**
 * @method Object.seal();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
 * @description Die Methode Object.seal(); sorgt dafür das keine neuen properties mehr zu einem Object hinzugefügt oder von einem object gelöscht werden können.
 * @param { object } Das zu schliessende Objekt
 * @returns { object }
 */

const sealObject =
{
    firstName: "Max",
    lastName: "Mustermann"
}

console.log(sealObject);

// wir fügen "age" hinzu...
sealObject.age = 25;

// ... und geben das veränderte objekt aus
console.log(sealObject);

// wir versiegeln das objekt
Object.seal(sealObject);

// wir versuchen "country" hinzuzufügen...
sealObject.country = "Germany";

// und geben das objekt aus
console.log(sealObject);

// Wir können die werte immernoch ändern
sealObject.age = 18;

console.log(sealObject);

// wir versuchen "age" zu löschen...
delete sealObject.age;

// ... und sehen das "age" immernoch da ist.
console.log(sealObject);

console.log("=".repeat(50));

/**
 * @method Object.isSealed();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed
 * @description Die Methode Object.isSealed(); prüft ob ein Object "sealed" ist, und gibt einen boolean zurück.
 * @param { object } Das zu prüfende Object
 * @returns { boolean }
 */
const sealTestObject = { name: "Ahmad" };
console.log("sealTestObject", Object.isSealed(sealTestObject));

Object.seal(sealTestObject);
console.log("sealTestObject", Object.isSealed(sealTestObject));

console.log("=".repeat(50));

/**
 * @method Object.freeze();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 * @description Die Methode Object.freeze(); "friert" ein Objekt ein, was bedeutet es kann nicht mehr verändert werden.
 */

const freezeObject =
{
    firstName: "James",
    lastName: "Bond"
}

console.log("freezeObject", freezeObject);

// Wir ändern den wert von LastName...
freezeObject.lastName = "Steward";

// ... und sehen das die ändern funktioniert hat
console.log("freezeObject", freezeObject);

// Wir frieren das das Objekt ein...
Object.freeze(freezeObject);

// Wir fügen age hinzu...
freezeObject.age = 25;

console.log("freezeObject", freezeObject);

// Wir ändern den wert von lastName noch einmal:
freezeObject.lastName = "Dean";

// Wir sehen das sich nichts verändert hat
console.log("freezeObject", freezeObject);

console.log("=".repeat(50));

/**
 * @method Object.isFrozen();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
 * @description Die Methode Object.isFrozen(); prüft ob ein Object "frozen" ist, und gibt einen boolean zurück.
 * @param { object }
 * @returns { boolean }
 */

console.log("Ist freezeObject frozen?", Object.isFrozen(freezeObject));

// Der unterschied zwischen Object.seal(); und Object.freeze();:
// Vorhandene Eigenschaften in Objekten, die mit Object.seal(); versiegelt wurden, können geändert werden.
// Vorhandene Eigenschaften in Objekten, die mit Object.freeze(); eingefroren wurden, werden unveränderlich gemacht.

console.log("=".repeat(50));

/**
 * @method Object.isExtensible();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible
 * @description Die methode Object.isExtensible(); prüft ob ein objekt veränderbar ist, ob es also frozen oder sealed ist und gibt einen boolean zurück
 * @param { object }
 * @returns { boolean }
 */

const extensibleObject = 
{
    firstName: "Bilbo",
    lastName: "Baggins"
}

console.log("ist extensibleObject veränderbar?", Object.isExtensible(extensibleObject));
console.log("ist sealObject veränderbar?", Object.isExtensible(sealObject));
console.log("ist freezeObject veränderbar?", Object.isExtensible(freezeObject));

console.log("=".repeat(50));

/**
 * @method Object.defineProperty();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
 * @description Die Methode Object.defineProperty(); erstellt oder verändert eine property in einem Objekt.
 * @param { object } obj - Das Objekt das wir verändern wollen
 * @param { string } name - Name der property
 * @param { object } value - Der wert oder die werte, den die property übernehmen soll
 * @returns { object }
 */

const user =
{
    firstName: "Max",
    lastName: "Mustermann",
    country: "Germany"
}

console.log(user);

// Wenn wir eine propety ändern wollen, können wir dies direkt auf dem objekt machen.
Object.defineProperty(user, "country", { value: "Russia" });
// user.country = "Russia";
console.log(user);

// Wenn wir eine property hinzufügen wollen, können wir einige optionen angeben:
// - enumerable = die property wird in der anzeige übernommen oder nicht (ist also für die konsole sichtbar oder nicht).
// - writable = die property ist überschreibar/veränderbar oder nicht.
Object.defineProperty(user, "userName",
{
    value: "TestUser1234",
    enumerable: false, // default: true
    writable: false   // default: true
});

console.log(user);

user.userName = "NewTestUser";

console.log(user);

// test wegen Object.assign();
const dingsObject = { a: 2 };
Object.assign(dingsObject, user);
console.log(dingsObject);

/*
enumerable: true;
{
    a: 2,
    firstName: 'Max',
    lastName: 'Mustermann',
    country: 'Russia',
    userName: 'TestUser1234'
}
enumerable: false;
{ 
    a: 2, 
    firstName: 'Max', 
    lastName: 'Mustermann', 
    country: 'Russia'
}
*/

// Wenn wir mit object assign Objekte zusammenfügen, die enumerable auf false haben, wird dies auch für das veränderte objekt übernommen.
