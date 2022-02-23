// wir nutzen das native node modul crypto um ein passwort mit sha256 zu verschlüsseln und returnen das ergebnis.

// info zu crypto: https://www.educative.io/edpresso/what-is-node-cryptocreatehashalgorithm-options

// info zu sha256: https://www.n-able.com/blog/sha-256-encryption#:~:text=SHA%2D256%20is%20a%20patented,that%20is%20256%20bits%20long.&text=In%20cryptographic%20hashing%2C%20the%20hashed,its%20original%20512%2Dbit%20form

// ein sha256 gehashtes passort ist nicht wieder umwandelbar in ein lesbares format, passwörter werden heutzutage aber sowieso NIEMALS wieder umgewandelt, sondern verschlüsselt in der datenbank gespeichert und dann mit einer verschlüsselten version der passworteingabe verglichen.

/*
    Logik:
    stellen wir uns vor, wir wollen unser passwort in einem login fenster eingeben:

    das password wird jetzt nicht gesendet und auf dem server direkt mit dem entschlüsselten passwort vetglichen, sondern unser eingegebenes passwort wird mit dem selben geheimschlüssell verschlüsselt wie das originalpasswort, und wir d dann mit dem gespeicherten passwort verglichen, nur wenn beides zusammenpasst, ist das passwort korrekt.

    Das passwort, das wir beim registrieren angeben war:
    "test"
    gespeichert wurde dieses passwort als:
    "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"

    wir sind jetzt in der login maske und wollen unser passwort eingeben:
    "test"
    dieses wird jetzt direkt verschlüsselt:
    "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"
    und mit dem original verglichen:
    "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"

    sind beide werte gleich, ist das passwort korrekt.
*/

// wir können diese logik testen, indem wir eine funktion schreiben, in der wir das passwort und den secret key übergeben und uns dann das gehashte passwort in der konsole ausgeben lassen, und die funktion ein weiteres mal aufrufen, mit den gleichen oder anderen daten.

// als erstes importieren wir crypto, da crypto zu nodejs gehört, müssen wir dafür kein npm paket installieren:
const crypto = require('crypto');

// als nächstes erstellen wir einen secret key, auf basis dessen wir unsere verschlüsslung erstellt. Dies ist wichtig, damit später passwörter mit dem selben, konsistent bleibenden geheimschlüssel verglichen werden können, ähnlichen wie bei einem geheimcode, wo wir einen schlüssel benötigen um ihn zu entziffern. Dieses wert ist natürlich in produktion wieder ein fall für unsere .env und das NIEMALS irgendwo öffentlich stehen.
const secret = "supergeheimermegasecretkeydenkeinerjemalswissenwirdnichtmalmeinchefoderseineoma";

// jetzt erstellen wir eine test funktion, der wir ein passwort und ein secret übergeben:
const createHash = (password, secret) =>
{
    // wir rufen die .createHmac(); methode von crypto auf, um ein gehashtes passwort zu erstellen. Im ersten parameter geben wir an, welchen verschlüsslungsalgrythmus wir nutzen wollen. Wir nutzen sha256 (secret hash algorythm with 256 bytes), der industriestandard für passwörter (oder bitcoins):
    const hash = crypto.createHmac('sha256', secret)
    // als nächstes geben wir in der .update(); methode den string an, den wir verschlüsseln wollen, diese methode heisst update, weil wir während der bearbeitung immer mehr text einfügen können, und so ganze textblöcke oder inhalte verschlüsseln könnten.
    .update(password)
    // am ende wandeln wir mit der .digest(); methode das ganze in einen hexadezimal-string um.
    .digest('hex');

    // wir returnen das gehashte passwort:
    return hash;
}

// sagen wir, dies ist das passwort, das in der datenbank gespeichert ist:
console.log("DATENBANK:", createHash("test", secret));

// sagen wir, wir loggen uns auf unserer login seite ein, dies ist das passwort, das an den server übergeben wird:
console.log("LOGIN:    ", createHash("test", secret));

// sagen wir, wir geben das passwort falsch ein:
console.log("FALSCH:   ", createHash("falschespasswortabc", secret));

// sagen wir ein hacker hat unsere komplette seite kopiert und möchte unsere user abfangen, er hat sogar unsere datenbank kopiert ... hat aber einen anderen secret key, weil er an unseren nicht ran kam. wir loggen uns dort mit dem richtigen passwort ein:
console.log("HACKER:   ", createHash("test", "wurstwasser"));
