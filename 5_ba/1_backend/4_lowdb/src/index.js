// Wir importieren lowDB nachdem wir es mit dem kommando "npm install lowdb@1" installiert haben:
const low = require('lowdb');

// zum synchronisieren der json datei, die die datenbank beinhaltet importieren wir einen sogenannten adapter, dieser nennt sich FileSync und sorgt dafür das das schreiben von inhalten in die datenbank synchron abläuft, und so die verschiedenen befehle sich nicht gegenseitig im weg stehen:
const FileSync = require('lowdb/adapters/FileSync');

// wir erstellen einen adapter und geben an wie die datei heißen soll. in der wir die datenbank schreiben wollen:
const adapter = new FileSync('db.json');

// wir initialisieren eine neue instanz von lowDB, zusammen mit dem adapter, auf der variable db:
const db = low(adapter);

// jetzt erstellt lowdb die datei in unserem projekt.

// wir erstellen optional ein obejekt mit default werten für unsere datenbank:
const defaultData = 
{
    // das oberste objekt ist eine sogenannte kollektion, in kollektionen werden daten innerhalb einer datenbank gesammelt, logische kollektionen wären zum beispiel: "users", "categories" oder "products"
    cars:
    [
        {
            id: 1,
            brand: "Ford",
            name: "Kuga",
            type: "suv",
            year: 2019
        },
        {
            id: 2,
            brand: "Ford",
            name: "Mustang",
            type: "sport",
            year: 1967
        }
    ]
}

// wenn wir jetzt mit db.defaults(); diese default werte übergeben, und mit .write(); in die datenbank schreiben, können wir diese auch sofort in der json datei sehen:
db.defaults(defaultData).write();

// jetzt haben wir alles um unsere datenbank laufen zu lassen, und könenn nun die daten hinzufügen, entfernen oder verändern:

// EINTRAG ERSTELLEN:

// damit wir nicht immer wieder den gleichen eintrag erstellen, wenn node neu startet packen wir unsere zugriffsmethoden zu testwecken in funktionen, die wir beim testen aufrufen können. Da wir bei express diese aktionen in routen legen, werden sie auch nur ein einziges mal ausgeführt.

const create = ({ id, brand, name, type, year }) =>
{
    // wir erstellen also ein objekt mit den gewünschten werten;
    const newCar =
    {
        id,
        brand,
        name,
        type,
        year
    }

    // wir holen uns die kollektion "cars" mit .get(); und pushen das objekt dort hinein, am ende nutzen wir die methode .write(); um die daten in die datenbank zu schreiben:
    db.get("cars").push(newCar).write();

    // damit wir sicher gehen können, das alles geklappt hat, können wir außerdem eine meldung in der konsole ausgeben:
    console.log("EINTRAG ERSTELLT:", newCar);
};

// wir führen die funktion create aus, und sehen den neuen eintrag in der "db.json" und in der konsole:
/*
create({
    id: 4,
    brand: "Jaguar",
    name: "F-Pace",
    type: "SUV",
    year: 2020
});
*/

// ALLE EINTRÄGE AUSLESEN:

// um alle einträge anzeigen zu lassen nutzen wir die methode .get(), sie holt sich die kollektion und der befehl .value(); zeigt die werte in der kollektion an:
const read = () =>
{
    // mit .get(); und .value(); bekommen wir die werte aller einträge:
    const allCars = db.get("cars").value();

    // wir geben jetzt die gefundenen werte in der konsole aus:
    console.log(allCars);
};

// wir führen die funktion read(); aus, und sehen alle einträge im terminal:
// read();

// EINEN EINZELNEN EINTRAG AUSLESEN:
const readOne = (id) =>
{
    // wir nutzen die methode .find(); um einen spezifischen eintrag zu finden:
    const selectedCar = db.get("cars").find({ id }).value();

    // wir könne bei find auch mehrere daten suchen, nicht nur id, um spezifischer einen eintrag zu finden, beispielsweise:
    // const selectedCar = db.get('cars').find({ brand: "Ford", year: 2020 }).value();
    
    console.log(selectedCar);
};

// readOne(3);

// MEHRERE EINTRÄGE FINDEN:
const readMore = (brand) =>
{
    // um mehrere ergebnisse anhand bestimmter inhalte zu finden, nutzen wir die methode .filter();:
    const searchedCars = db.get("cars").filter({ brand }).value();

    // jetzt geben wir das array mit den gefundenen inhalten in der konsole zurück:
    console.log(searchedCars);
}

// readMore("Ford");

// EINEN EINTRAG UPDATEN:
const update = (id, year) =>
{
    // wir holen uns die kollektion cars, und suchen den richtigen eintrag:
    db.get("cars").find({ id })
    // dann nutzen wir die methode .assign(); um die neuen daten einzufügen, und .write(); um die daten in die datenbank zu schreiben:
    .assign({ year }).write();

    console.log("hat geklappt...");
}

// update(2, 2022);

// EINEN EINTRAG LÖSCHEN:
const remove = (id) =>
{
    // um einen eintrag zu löschen, nutzen wir wieder .get(); um die kollektion zu bekommen, danach nutzen wir die methode .remove(), der wir den wert übergeben, anhand dessen wir den eintrag finden wollen:
    db.get('cars').remove({ id }).write();

    // wenn wir jetzt in der datenbank nachsehen, werden wir sehen, das der gesuchte eintrag gelöscht wurde
};

// remove(3);

/*
    die befehle in express um eine sogenannte CRUD applikation zu bauen, in der wir auf datenbanken oder apis zugreifen:
    C = CREATE(POST)    - app.post();
    R = READ(GET)       - app.get();
    U = UPDATE(PUT)     - app.put();
    D = DELETE(DELETE)  - app.delete();
*/