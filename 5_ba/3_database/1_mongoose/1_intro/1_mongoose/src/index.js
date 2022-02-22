// wir importieren mongoose:
const mongoose = require('mongoose');

// wir erstellen eine variable in der wir die url unseres mongodb servers, und die datenbank die wir ansprechen wollen, angeben.
// mongodb nutzt standardmäßig das protokoll "mongodb" und den port "27017":
const databaseURL = 'mongodb://localhost:27017/intro';
/*
    in produktion in der .env:
    DB_URL=mongodb://localhost:27017/
    DB_NAME=intro
*/

// wir nutzen die methode .connect(); um unsere datenbank mit mongoose anzusprechen, uns also zu ihr zu verbinden, und geben dann noch ein paar optionen an.
              // datenbank URL, optionen
mongoose.connect(databaseURL, { useNewUrlParser: true, useUnifiedTopology: true });

// wir erstellen eine weitere variable, in der wir das verbindungsobjekt speichern, indem wir uns die aktive verbindun mit dem attribut .connection; holen:
const db = mongoose.connection;

// dieses objekt ist nun nicht nur für all unsere datenbank handlungen verantwortlich, sondern bietet uns auch eine menge interessanter informationen:
// console.log(db);

// mongoose stellt uns einige events zur verfügung, mit denen wir bestimmte aktionen in der datenbank prüfen können.

// mit dem "error" event des db objektes können wir verbdindungsfehler abfangen, da mongoose die verbidung aber ein paar mal versucht herzustellen müssen wir ein wenig warten, bis wir den fehler sehen. wenn wir zum test die adresse verändern würden.

// wir binden die konsole direkt an das error event und können so den callback direkt nutzen:
db.on('error', console.error.bind(console, 'Verbindungsfehler!'));

// wir können events sowohl mit "on", wenn sie auftreten ausführen, oder mit "once", wenn wir das event nur einmal abfeuern wollen, dies macht vorallem sinn, beim öffnen von verbindungen, da wir dann direkt sehen, das wir erfolgreich mit mongodb verbunden wurden.
db.once('open', () => {
    console.log("Wir sind mit MongoDB verbunden!");
});

// um ein Schema zu erstellen, nutzen wir die methode .Schema(); von mongoose auf einer neuen variable und fügen unsere informationen als objekt ein, auf dem wir alle schlüssel jheweils mit den namen der information und als wert für jeweils den datentype angeben. Optional können wir auch angeben, das wir bestimmte informationen zum beispiel unique oder required machen.

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    availible: Boolean,

    // wir geben noch an, das wir eine unique ID haben wollen, und das diese immer angegeben werden muss, wenn dies tun müssen wir den datentyp unter "type" mitgeben
    id: { type: String, unique: true, required: true },

    // ein erstellungsdatum des eintrags können wir auch einstellen, dafür geben wir einfach das aktuelle datum als default an:
    created: { type: Date, default: new Date() }
});

// jetzt nutzen wir diese schema information um ein modell daraus zu erschaffen, dazu nutzen wir die methode .model();

// wir geben als ersten des namen an, den wir für das jeweilige modell nutzen wollen, dann geben wir das schema an, das wir eben erstellt haben, und dann die kollektion, in der wir das modell speichern wollen.

// Sollte die kollektion nicht existieren, wird sie jetzt automatisch angelegt.
                          // name, schema, kollektion
const Book = mongoose.model('Book', bookSchema, 'books');

// wir können jetzt in compass sehen, das die datenbank und die kollektion existieren.

// wenn wir jetzt einen neuen eintrag erstellen wollen, können wir dieses, indem wir eine neue instanz von dem modell Book anlegen, und es mit unseren informationen füllen:
const newBook = new Book({
    title: "The Hound of the Baskervilles",
    author: "Arthur Conan Doyle",
    price: 15,
    availible: true,
    id: 1
});
// created geben wir nicht an, da der default wert automatisch eingetragen wird.

console.log(newBook);

// INFO: um die verschiedenen befehle asynchron auszuführen, und sicherzugehen, das die befehle in der richtigen reihnefolge ausgeführt werrden, nutzen wir im beispiel eine funktion, in express können wir später allen anhand von routen aufrufen und brauchen diese art und weise NICHT.

const run = async () =>
{
    // wir haben jetzt eine instanz unsere Book modells erstellt, also ein neues buch, aber dies noch nicht in unserer datenbank gespeichert.

    // um das dokument zu speichern nutzen wir die mongoose methode .save();. Beim ausführen dieser methode speichert mongoose das dokument und liefert ein callback zurück. in dem wir fehler und die dokumenten informationen verwenden können, dies ist sehr hilfreich wenn wir dem nutzer einer api zum beispiel mitteilen wollen, was er getan hat.

    // newBook.save((err, book) =>
    // {
    //      if(err) throw err;
    //      console.log(`${ book.title } von ${ book.author } wurde gespeichert!`);
    // });

    await newBook.save()
    .then(book =>
    {
        console.log(`${ book.title } von ${ book.author } wurde gespeichert!`);
    })
    .catch(err =>
    {
        throw err;
    })

    // Wenn wir jetzt speichern sehen wir das dokument mit den buch informationen in compass, inklusive des datums, der mongo internen id und der aktuellen version des dokumentes, 0. Wenn wir daten überschreiben würden, legt mongo eine neue version des dokumentes an.

    // Wenn wir noch einmal speichern, bekommen wir eine fehlermeldung, diese sagt uns nicht nur welchen fehler es gab, sondern auch wo er auftrag, wie wir sehen, haben wir gesagt "id" muss UNIQUE sein, weswegen wir jetzt einen fehler bekommen, denn wir speichern wieder mit der ID 1.

    // wenn wir dokumente löschen wollen, gibt es dafür ein paar befehle, wir nutzen den modell befehl .deleteOne(); um das angelegte dokument zu löschen.
    await Book.deleteOne({ title: "The Hound of the Baskervilles" })
    .then(console.log("Buch wurde gelöscht!"))
    .catch(err => { throw err });
    
    // wir können mit mongoose, wie in der mongo shell auch mehrere andere befehle ausführen, wie zum beispiel mehrere dokumente hinzufügen, dafür einstellen wir ein array mit mehreren büchern.
    const newBooks =
    [
        {
            title: "Casino Royale",
            author: "Ian Flemming",
            price: 10,
            availible: false,
            id: 1
        },
        {
            title: "Illusions",
            author: "Richard Bach",
            price: 12,
            availible: true,
            id: 2
        }
    ];

    // mit der methode .insertMany(); aus der instanz unseres Book modells, fügen wir nun das array ein:
    await Book.insertMany(newBooks)
    .then(() => console.log('Bücher hinzugefügt'))
    .catch(err => { throw err });

    // wir wir in compass sehen, wurden beide dokumente hinzugefügt.

    // mit mongoose können wir aus unserer app heraus sogar komplette kollektionen oder datenbanken droppen, also löschen.

    // alle dokumente innerhalb einer kollektion löschen wir mit:
    await Book.collection.drop();

    // eine kollektion löschen wir mit:
    await db.dropCollection('books')
    .then(console.log("Kollektion gelöscht"))
    .catch(err => console.log(err));

    // da eine leere datenbank nicht angezeigt wird, könenn wir dies jetzt nur schwer testen, aber eine komplette datenbank löschen wir mit der mehtode .dropDatabase();, in unserem falle bekommen wir fehler, da die datenbank sowieso nicht mehr existiert.
    await db.dropDatabase('intro')
    .then(console.log("Datenbank gelöscht"))
    .catch(err => console.log(err));

    // um die verbindung zur mongodb zu schließen nutzen wir den .close(); befehl:
    await mongoose.connection.close();
}

run();
