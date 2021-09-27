/**
 * Ein Objekt in JavaScript ist eine sammlung von werten, die bearbeitet gelesen und ausgegeben werden können.
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object
*/

// Als beispiel stellen wirt uns mal ein auto vor, ein auto hat werte wie
// Hersteller, Name, Farbe, Gewicht, Pferdestärken
const manufacturer = "Ford";
const model = "Kuga";
const color = "RubyRed"
const weight = 1760
const horsePower = 150;

// Diese einzelnen werte können wir ausgeben:
console.log(model);

console.log("=".repeat(50));

const car =
{
    manufacturer: "Ford",
    model: "Kuga",
    color: "RubyRed",
    weight: 1760,
    horsePower: 150,
    isDiesel: false,
    doors:
    [
        "FrontLeft",
        "FrontRight",
        "RearLeft",
        "RearRight",
        "Trunk"
    ],
    wheels:
    {
        amount: 4,
        size: 18
    }
}

// wir können das objekt ausgeben und sehen die verschiedenen werte aufgelistet in der konsole:
console.log(car);

// Auf die werte innerhalb des objektes können wir jetzt ganz einfach zugreifen:
// Entweder, ähnlich wie bei Arrays, mit ekigen klammern oder dem namen der information
console.log(car.doors[4]);
// mit dem punkt bewegen wir uns durch die verschachtelung.

// in eckige klammern können wir den namen des schlüssels (key) einfügen.
const suchString = "weight";
console.log("Gewicht:", car[suchString]);

// Wie bei methoden können wir uns mit dem punkt durch die verschachtlung bewegen, autocomplete schlägt uns das sogar vor:
console.log(car.wheels.amount);

console.log("=".repeat(50));

const car2 =
{
    manufacturer: "DMC",
    model: "Delorean",
    color: "SpaceGray",
    weight: 1500,
    horsePower: 120,
    isDiesel: false,
    doors: 
    [
        "FrontLeft",
        "FrontRight",
        "RearLeft",
        "RearRight"
    ],
    wheels:
    {
        amount: 4,
        size: 16,
        allSeason: false,
        // Wir können am ende einer wertsammlung auch ein so genanntes "Dangling Comma" setzen, also ein komma, ohne folgenden wert.
    }
}

console.log(car.model);
console.log(car2.model);

console.log("=".repeat(50));

// Ein typisches beispiel für ein objekt wäre ein Benutzer oder User:
const user =
{
    firstName: "Max",
    lastName: "Mustermann",
    age: 25,
    country: "DE",
    isAdmin: false,
    subUser:
    {
        firstName: "Saeed"
    }
}

// const testUser = [ "Max", "Mustermann", 25, "DE", false ];
// testUser[ 0 ]
// user.firstName;

console.log(user);

// Um die vorhandenen keys eines objektes aufzulisten, können wir das "Keys" keyword aus der Objektbibliothek nehmen dies gibt uns eine Array mit den keys aus.
console.log(Object.keys(user));

// genauso können wir auch die werte, also values auslesen.
console.log(Object.values(user));

console.log("=".repeat(50));

// mit dem punkt können wir ja auch schlüssel in dem objekt zugreifen, was aber passiert, wenn wir einen schlüssel angeben, der nicht existiert?
console.log(user.lastName);
console.log(user.hometown); // undefinierte property keys geben "undefined" zurück.

// Wir können werte innerhalb unseres objektes mit den dem datentyp zugehörigen Methoden behandeln:
console.log(user.firstName.toUpperCase());

console.log("=".repeat(50));

// In objekten können wir alle möglichen werte speichern, auch methoden.
// IN denen wir mit dem keyword "this" auf die werte innerhalb des objekt-blocks zugreifen können.

const newUser = 
{
    firstName: "James",
    lastName: "Bond",
    age: 43,
    country: "UK",
    isAdmin: true,
    fullName()
    {
        return this.firstName + " " + this.lastName;
    },
    isAdult(adultAge)
    {
        return this.age > adultAge;
    }
}

// Innerhalb einer funktion/methode steht "this" für den sogenannten "besitzer" des schlüssels den wir auslesen wollen.
// this. firstName ist also ein schlüssel des objektes, auf das wir zugreifen

// Wir können jetzt auf die funktion zugreifen, wenn wir sie, wie die anderen werte des objektes, einfach aufrufen.
console.log(newUser.fullName());
console.log(newUser.isAdult(18));