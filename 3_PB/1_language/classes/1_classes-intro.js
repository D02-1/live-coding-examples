/**
 * Klassen
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Classes
 * JavaScript klassen wurden 2015 eingeführt und sind im gewissen sinne eine erweiterung oder eine art Prototyp für Objekte, oder objekte zu erstellen.
 * 
 * Was genau sind Klassen?
 * Klassen sind in der Objektorierten Programmierung ein Bauplan, wenn man eine reihe von ähnlichen objekten oder inhalten braucht.
 * Wenn wir zum beispiel eine klasse AUTO hätten, und das auto die eingeschaften farbe, marke und PS hätte, können wir mit hilfe eines sogenannten constructors eine klasse immer wieder verwenden um ein neues Fahrzeug mit diesen eigenschaften zu erstellen. Im gegensatz zu Objekten, wo wir ein fahrzeug anlegen, und dann versuchen müssen anderen fahrzeugen ähnliche eigenschaften/properties zu geben.
 */

// Vergleich Objekte und Klassen
const car1 =
{
    brand: "Ford",
    model: "Kuga",
    color: "RubyRed",
    horsePower: 150
}

const car2 =
{
    brand: "Ford",
    model: "Mustang",
    color: "Black",
    horsePower: 280
}

console.log("Objekt 1:", car1);
console.log("Objekt 2:", car2);

/**
 * @class Car
 */
class Car
{
    brand;
    model;
    color;
    horsePower;

    /**
     * @constructor
     * @description
     * Der Konstructor ist eine spezielle art von Methode, die benutzt wird um klassen zu initialisieren, und existiert ein mal pro klasse.
     */
    constructor(brand, model, color, ps = 25)
    {
        // mit dem this keyword greifen wir auf die variablen innerhalb einer klasse zu
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.horsePower = ps;
    }
}

// Mit dem new keyword erstellen wir eine neue kopie der klasse, mit den werten, die wir eingeben.

const car3 = new Car("Bentley", "Continental GT", "White", 680);
const car4 = new Car("Volkswagen", "Käfer", "Yellow", 55);
const car5 = new Car("Mercedes-Benz", "Motorwagen", "Silver");

console.log(car3);
console.log(car4);
console.log(car5);

console.log(car3.brand);

car5.horsePower = 12;
console.log(car5);
