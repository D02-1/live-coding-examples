// erweiterte query methoden geben uns außer unseren bekannten filtern, die möglichkeit bestimmte sortierungen, oder vergleiche auszuführen. Um nicht nur die daten zu bekommen die wir haben wollen, sondern auch wie wir sie haben wollen.

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/query-advanced-example')
.then(() => console.log('Datenbank verbunden!'))
.catch(err => { throw err });

// als erstes erstellen wir ein schema und modell und ein paar einträge zum testen:
const carSchema = new mongoose.Schema({
    brand: String,
    name: String,
    year: Number,
    doors: Number
}, { timestamps: true });

const Car = new mongoose.model('Car', carSchema, 'cars');

// wir schreiben eine funktion mit der wir fahrzeuge erstellen:
const createCar = async (brand, name, year, doors) =>
{
    const newCar = new Car({
        brand,
        name,
        year,
        doors
    });

    const car = await newCar.save();

    console.log(car);
}

// wir erstellen ein paar fahrzeuge, um unsere datenbank zu füllen:
// createCar('Ford', 'Kuga', 2019, 5);
// createCar('Ford', 'Mustang', 1969, 2);
// createCar('Ford', 'Mustang', 2022, 2);
// createCar('Opel', 'Omega', 1992, 4);
// createCar('Jepp', 'Renegade', 2015, 5);

// wir können unsere einträge sortieren, hierfür können wir jegliche felder nehmen, strings werden nach buchstaben sortiert, nummern nach zahl und datumsfelder nach zeit.
const listCarsSorted = async () =>
{
    // wir geben in .sort(); das feld an, nach dem wir sortieren wollen, und die reihenfolge, also aufwärts oder abwärts.

    /*
        angeben können wir diese reihenfolge auf verschiedene arten. Wir können folgende eingaben nutzen:

        aufsteigend sortieren:
        - asc
        - ascending
        - 1

        absteigend sortieren:
        - desc
        - descending
        - -1

        wir nutzen "ascending" und "descending" für unser beispiel.
    */

    // als beispiel nehmen wir das baujahr unserer fahrzeuge und sortieren sie aufsteigend.

            // feld nach dem wir sortieren wollen: reihenfolge
    // const allCars = await Car.find().sort({ year: "descending" });
    // wie wir sehen, sind alle fahrzeuge nach neu zu alt, oder von alt zu neu sortiert, wie wir wollen.

    // natürlich können wir auch nach erstellungsdatum sortieren, dafür nutzen wir das feld createdAt aus dem timestamp:
    // const allCars = await Car.find().sort({ createdAt: "ascending" });
    // wir sehen die fahrzeuge jetzt in der reihenfolge, in der sie in die datenbank geschrieben wurden.

    // es ist auch möglich nach mehreren kritieren zu sortieren, und nach reihenfolge einzugrenzen:
    const allCars = await Car.find().sort({ year: 'descending', doors: 'ascending' });

    console.log(allCars);
}

// wir führen die funktion aus:
// listCarsSorted();

// wir haben in mongoose auch die möglichkeit zu sagen, wir wollen nur eine bestimmte anzahl von ergebnissen haben:
const listOnlyTwoCars = async () =>
{
    // mit der methode .limit(); geben wir die menge an, die wir zurück bekommen wollen:
    const twoCars = await Car.find().limit(2);

    console.log(twoCars);
}

// wenn wir die funktion ausführen, sehen wir, das wir nur 2 ergebnisse zurück bekommen, dies sind die ersten beiden die die datenverbindung findet, da wir nicht sortiert haben oder andere informationen übergeben haben.
// listOnlyTwoCars();

// eine bestimmte anzahl von dokumenten ab eines gewissen eintrages bekommen wir mit der methode .skip(); - Dies ist besonders hilfreich in zusammenarbeit mit .limit(); da wir so eine pagination erstellen können, also zum beispiel nur eine bestimmte anzahl von dokumenten zurückliefern, die wir gerade anzeigen wollen, ab einem bestimmten punkt.

// als beispiel schreiben wir deshalb die funktion, in der wir sowohl den startpunkt, wie auch die menge der dokumente sehen wollen:

const skipSomeCars = async (start, amount) =>
{
    const cars = await Car.find().skip(start).limit(amount);

    console.log(cars);
}

// wenn wir die funktion jetzt ausführen, sehen wir das wir nur die fahrzeuge 3 und 4 anzeigen:
// skipSomeCars(2, 2);

// geben wir an, das wir 4 dokumente überspriongen wollen, und mehr als ein dokument anzeigen wollen, aber nur 5 haben, wird nur eines zurückgeliefert.
// skipSomeCars(4, 2);

// Erweiterte filter:

// mongoose hat ein paar hübsche funktionen um filter zu definieren, die spezifische werte ansprechen, so können wir zum beispiel sehen welche dokumente eine gewisse menge von etwas, oder weniger beinhalten.

// diese filtermethoden sind sehr ähnlich zu denen die wir kennen, sie werden nur ein wenig anders geschrieben. Wir geben hier an "wo" wir etwas suchen, also bei welchem schlüssel, und geben dann an, wie der zustand des wertes sein soll. Also ob der wert "gleich" unserer suche sein soll, "größer" unserer suche sein solll oder kleiner... oder vielleicht ob es ihn überhaupt gibt.

// mit der methode .where(); geben wir den schlüssel an, also "wo" wir suchen wollen, und mit der methode .equals(); sagen wir, der wert soll "gleich" dem sein, den wir angeben, also sagen wir praktisch "in der kollektion X"..."gib uns alles aus was bei dem schlüssel Y"..."Z gleicht".
const listAllFords = async () =>
{
    // wir schreiben das ganze praktisch als englischen satz auf:

    // in der kollektion Car, wollen wir alle ergebnisse haben wo...
    const allFords = await Car
    // ... der schlüssel "brand" ...
    .where('brand')
    // ... den wert "Ford" hat:
    .equals('Ford');

    // wir könnten auch schreiben:
    // const allFords = await Car.where('brand', 'ford');

    console.log(allFords);
}

// listAllFords();

// mit der methode .lt(); kurz für "less than" geben wir an, das ein wert "weniger" sein soll, als das was wir angeben:
const listCarsWithLessThanFourDoors = async () =>
{
    // in der kollektion Car, wollen wir alle ergebnisse haben wo...
    const allCarsWithLessThanFourDoors = await Car
    // ... der schlüssel "doors" ...
    .where('doors')
    // ... weniger als 4 beträgt:
    .lt(4);

    console.log(allCarsWithLessThanFourDoors);
}

// listCarsWithLessThanFourDoors();

// das ganze geht mit der methode .gt(); ("greater than" oder "greater") auch anderhersum, wir können also sagen wir wollen alle ergebnisse haben, wo der gesuchte wert "höher" ist als die angabe:
const listAllCarsWithMoreThanFourDoors = async () =>
{
    // in der kollektion Car, wollen wir alle ergebnisse haben wo...
    const allCarsWithMoreThanFourDoors = await Car
    // ... der schlüssel "doors" ...
    .where("doors")
    // ... mehr als 4 beträgt:
    .gt(4);

    console.log(allCarsWithMoreThanFourDoors);
}

// listAllCarsWithMoreThanFourDoors();

// wir können auch mehrere daten angeben, wenn wir zum beispiel mehrere dokumente mit verschiedenen werten haben wollen, zum beispiel um die daten mehrerer spezifischer personen zu finden. Hierfür nutzen wir die methode .in();, und übergeben ein Array.
const listAllFordsAndJeeps = async () =>
{
    // in der kollektion Car, wollen wir alle ergebnisse haben wo...
    const allFordsAndJeeps = await Car
    // ... der schlüssel "brand" ...
    .where('brand')
    // ... "Ford" oder "Jeep" beträgt:
    .in([ "Ford", "Jepp" ])
    // wir können die anfrage auch weiter chainen, indem wir ein .where(); aufrufen, gefolgt von einem weiteren suchwert.
    .where('doors').equals(5);

    console.log(allFordsAndJeeps);
}

listAllFordsAndJeeps();

/*
    es gibt noch einige weitere methoden, mit denen wir einträge suchen können, die komplette liste ist:
    .lt();              = wert sollte kleiner sein als die angabe
    .gt();              = wert sollte größer sein als die angabe
    .lte();             = wert sollte kleiner oder gleich der angabe sein
    .gte();             = wert sollte größer oder gleich der angabe sein
    .in();              = wert innerhalb des arrays sollte existieren
    .nin();             = wert innerhalb des arrays sollte nicht existieren
    .equal();           = wert sollte gleich der angabe sein
    .ne();              = wert sollte nicht gleich der angabe sein
    .regex();           = wert soll ein regex string sein
*/
