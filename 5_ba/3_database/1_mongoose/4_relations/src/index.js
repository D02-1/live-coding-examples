// da es verschiedene arten und weisen gibt, wie man eine applikation schreibt, schreibe ich dieses beispiel für mongoose schema referenzen als funktionale applikation, ohne express. in express würden wir, wie wir schon einmal besprochen haben, dinge wie async/await hier nicht benötigen.

// wir importieren mongoose:
const mongoose = require('mongoose');

// wir erstellen eine verbindung zu mongoDB und geben die datenbank mit an. wir nutzen then/catch um den status zu erfahren:
mongoose.connect('mongodb://localhost/relation-example') // mongodb://localhost:27017/relation-example
.then(() => console.log('Datenbank verbunden!'))
.catch(err => { throw err });

// wir erstellen unsere schemen diesmal, da wir nur mongoose importiert haben und nur eine datei nutzen wollen, nicht mit "Schema" und "model", sondern müssen mongoose als namespace mit angeben, wenn wir die methoden verwenden wollen, aus Schema(); wird also mongoose.Schema(); und aus model(); wird also mongoose.model();

// Ein author hat einen vor und nachnamen, und kann mehrere artikel verfasst haben:
const authorSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    articles: [
        {
            // der typ ist ObjectId aus mongoose.Schema 
            type: mongoose.Schema.Types.ObjectId, 

            // wir geben als referenz an, welches Modell verwendet werden soll.
            ref: 'Article'
        }
    ]
});

// wir erstellen das modell für Author
const Author = new mongoose.model('Author', authorSchema, 'authors');

// ein artikel hat einen titel, einen text, und wurde von einem author verfasst:
const articleSchema = new mongoose.Schema({
    title: String,
    text: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    }
});

// wir erstellen das modell für Article
const Article = new mongoose.model('Article', articleSchema, 'articles');

// eine zeitung hat einen title, ein datum, einen leitartikel und mehrere normale artikel
const newspaperSchema = new mongoose.Schema({
    title: String,
    date: { type: Date, default: new Date() },

    // bei einem einzelnen dokument das wir referenzieren nutzen wir direkt das objekt für die optionen...
    mainArticle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    },

    // ... wenn wir mehrere dokumente referenzieren, nutzen wir die selben daten, in einem array.
    articles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Article'
        }
    ]
});

// wir erstellen das modell für newspaper
const Newspaper = new mongoose.model('Newspaper', newspaperSchema, 'newspapers');

// wir erstellen  eine asynchrone funktion, mit der wir einen author erstellen, das feld articles lassen wir erst mal leer.
const createAuthor = async (firstname, lastname) =>
{
    // wir erstellen einen neuen author, und übergeben ihm die informationen aus dem funktionsaufruf:
    const author = new Author({
        firstname,
        lastname
    });

    // wir speichern den author in der datenbank:
    const newAuthor = await author.save();

    // und lassen uns das ergebnis in der konsole ausgeben:
    console.log(newAuthor);
}

// wir legen ein paar authoren an, indem wir die funktion ausführen und daten übergeben:
// createAuthor("Rick", "Reich");
// createAuthor('James', 'Bond');
// createAuthor('Saeed', 'Chabok');

// wie wir sehen, wurden die neuen authoren in der datenbank gespeichert, außerdem sehen wir, das sie ein leeres array mit dem schlüssel articles besitzen.

// wir kommen dieren die createAuthor funktion aus, und erstellen eine asynchrone funktion, mit der wir uns alle authoren ausgeben lassen können:
const listAuthors = async () =>
{
    // mit der methode .select(); können wir angeben, welche schlüssel und werte wir anzeigen (und übergeben) lassen wollen, da wir nicht immer all unsere informationen übergeben wollen. Wir lassen uns nur den nachnamen und die artikel anzeigen, Dafür müssen wir nur die schlüssel, der weerte die wir anzeigen lassen wollen, mit leerzeichen getrennt als string an die methode übergeben:
    const allAuthors = await Author.find().select('lastname articles');

    console.log(allAuthors);
}

// wir führen die funktion aus, um all unsere authoren anzeigen zu lassen:
// listAuthors();

// wir sehen 3 authoren, das dürfte reichen um ein paar artikel zu schreiben. Außerdem sehen wir, das wir jetzt nurnoch die ID und die werte zurück bekommen, die wir haben wollten.

// wir erstellen eine asynchrone funktion um artikel zu erstellen, wir übergeben den title, den text und die authorenId des verfassers.
const createArticle = async (title, text, authorID) =>
{
    // wir erstellen einen neuen artikel und übergeben die authorenid auf dem feld author:
    const article = new Article({
        title,
        text,
        author: authorID
    });

    // wir speichern den artikel in der datenbank:
    const newArticle = await article.save();

    // wenn wir jetzt den artikel beim author speichern wollen, das er diesen artikel verfasst hat, suchen wir ihn anhand der ID und fügen den artikel hinzu:
    const currentAuthor = await Author.findById(authorID);
    currentAuthor.articles.push(newArticle);

    const updatedAuthor = await currentAuthor.save();

    // wir lassen uns den benutzer in der konsole ausgeben, wie wir sehen können wir hier auch unseren artikel sehen:
    console.log(updatedAuthor);
}

// jetzt führen wir die funktion aus, die authorId holen wir aus der datenbank:
// createArticle('Eins plus ein ist zwei', 'oder doch drei?', '621c9e6b4be2f3e45b280244');
// createArticle('Javascript für einsteiger', 'Zuerst lernen wir .reduce(); und Promises, dann markdown', '621c9e6b4be2f3e45b280243');
// createArticle('Kaffee.', 'Jetzt oder nie, 100 tassen auf Ex!', '621c9e6b4be2f3e45b280243');

// wie wir sehen, wurde ein neuer artikel erstellt, und eine ID im feld author hinterlegt, andersherum wurde bei author jeweils die artikel des authors, mit der richtigen id unter articles als ID abgelegt.

// wenn wir uns die daten aus den referenzierten dokumente anzeigen lassen wollen, nutzen wir die sogenannte .populate(); methode, dort können wir angeben, was wir ausgeben wollen, zb in einer api, und dort auch auf die referenzierten dokumente zugreifen.

// wir erstellen eine asynchrone funktion um unsere artikel anzeigen zu lassen:
const listArticles = async () =>
{
    const allArticles = await Article.find()
    // mit der methode .select(); wählen wir wieder aus, welche inhalte wir sehen wollen, wir lassen uns nur den title der artikel anzeigen:
    .select('title')

    // wir nutzen .populate(); um die daten des authors im artikel anzeigen zu lassen
    .populate('author');

    allArticles.forEach(article =>
    {
        console.log(`Der Artikel "${ article.title }" von ${ article.author.firstname } ${ article.author.lastname }`)
    });
}

// wie wir sehen, werden alle informationen von author mitgeliefert, obwohl wir bei .select(); sagten, das wir nur den titel sehen wollten, das bedeutet, das wir mit der methode .populate(); überschreiben, was wir bei select auswählen.
// listArticles();

// mit unserem jetzigen wissen können wir eine neue funktion schreiben, um einzelne authoren und ihre artikel anzeigen zu lassen:
const showAuthor = async (authorId) =>
{
    // wir holen uns mit .findById(); den gesuchten author:
    const selectedAuthor = await Author.findById(authorId)

    // wir sagen mit .populate();, das wir die artikel des authoren anzeigen lassen wollen, wir können bei der .populate(); methode aber auch ein paar optionen angeben, um mehr freiheit zur konfiguration zu haben:
    .populate({
        // mit dem schlüssel "path" geben wir an, was wir populieren wollen, dies ist die lange form von ".populate('schlüsselname');"
        path: 'articles',

        // jetzt können wir mit dem schlüssel 'select' angeben, welche informationen wir sehen wollen:
        select: 'title',

        // innerhalb von .populate(); können wir populate als schlüssel wieder aufrufen, und können so werte aus den referenzierten dokumenten anzeigen lassen, die innerhalb eines referenzierten dokumentes sind.
        populate:
        [
            {
                path: 'author',

                // wir sagen, das wir nur den nachnamen sehen wollen:
                select: 'lastname'
            }
        ]
    })
    // mit der .exec(); methode sagen wir, führ die population aus, und gebe uns dann die möglichkeit mit den daten zu arbeiten:
    .exec((err, author) =>
    {
        // wir können uns jetzt innerhalb des baumes fortbewegen, wie wir wollen:
        
        // der ganze author:
        console.log(author);

        // der vorname des authors:
        console.log("VORNAME:", author.firstname);

        // der erste artikel des authors:
        console.log("ARTIKEL:", author.articles[0]);

        // der titel des ersten artikels:
        console.log("ARTIKELTITEL:", author.articles[0].title);

        // der vorname des authors INNERHALB des artikels:
        console.log('VORNAME IM ARTIKEL:', author.articles[0].author.firstname);

        // der nachname des authors INNERHALB des artikels:
        console.log('NACHNAME IM ARTIKEL:', author.articles[0].author.lastname);
    });
}

// wir führen unsere funktion aus:
// showAuthor("621c9e6b4be2f3e45b280243");

// zu guter letzt erstellen wir ein neues newspaper, das alle artikel beinhalten soll, aber nur einen leitartikel.
const createNewspaper = async () =>
{
    // zu allererst erstellen wir ein neues newspaper
    const newNewspaper = new Newspaper();

    // dann suchen wir alle artikel, und holen uns mit der option '_id' nur die id, da wir ja nicht mehr brauchen.
    const allArticles = await Article.find({}, '_id');

    // wir geben den titel an:
    newNewspaper.title = "Das Entwicklerblatt";

    // den ersten artikel nehmen wir als leitartikel, und speichern ihn anhand seiner id ab.
    newNewspaper.mainArticle = allArticles[0]._id;

    // es gibt verschiedene methoden, um daten hinzuzufügen, wie zum beispiel mongoose $push, ich denke aber hier eine wiederholen von javascript einzubauen, kann nicht schaden, weshalb wir... .forEach(); benutzen.

    allArticles.forEach((article, i) =>
    {   
        // if (i !== 0) {}
        newNewspaper.articles.push(article._id);
    });

    // am ende speichern wir unser newspaper ab:
    const createdNewspaper = await newNewspaper.save();
    console.log(createdNewspaper);
}

// wir führen unsere funktion aus, und sehen all die daten die wir haben wollten:
// createNewspaper();

// als letztes erstellen wir eine funktion, die uns das newspaper mit all ihren artikeln ausgibt:
const showNewspaper = async (newspaperId) =>
{
    const selectedNewspaper = await Newspaper.findById(newspaperId)
    // wenn wir in .populate(); ein array übergeben, können wir mehrere pfade auf der selben ebene ansprechen:
    .populate([
        {
            path: 'articles',
            populate: 
            {
                path: 'author',
                select: 'lastname'
            }
        },
        {
            path: 'mainArticle',
            populate:
            {
                path: 'author',
                select: 'firstname lastname'
            }
        }
    ]).exec((err, newspaper) =>
    {
        // wie wir sehen, bekommen wir alle artikel der zeitung und die daten zurück:
        console.log(newspaper);

        // wir können also auf all diese daten zugreifen, und das ganze mit unserem wissen ein wenig hübscher machen:

        console.log('\n' + "-".repeat(100) + "\n");

        console.log(newspaper.title);
        console.log(newspaper.date);

        console.log('\n' + "-".repeat(100) + "\n");

        console.log(newspaper.mainArticle.title);
        console.log(newspaper.mainArticle.text);
        console.log("\nvon " + newspaper.mainArticle.author.firstname + " " + newspaper.mainArticle.author.lastname)

        console.log('\n' + "-".repeat(100) + "\n");

        newspaper.articles.forEach(article =>
        {
            console.log(article.title);
            console.log("\nvon " + article.author.lastname);

            console.log('\n' + "-".repeat(100) + "\n");
        });
    });
}

// wir lassen uns das newspaper anzeigen:
showNewspaper("621ca79e81174fd8ae034f76");
