/**
 * Strings
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */

// Strings Escapen
    // Mit \n können wir einen zeilenumbruch einfügen.
    const escapeZeile = "Dies ist\nein mehrzeiliger\nString";
    console.log(escapeZeile);

    // Mit \t können wir einen tabulator einfügen.
    const escapeTab = "Dies ist ein g\te\tt\ta\tb\tb\tt\te\tr string";
    console.log(escapeTab);

    // Mit \" oder \' können wir innerhalb von Strings unsere anführungszeichen innerhalb eines strings wieder benutzen.
    const escapeGans = "Dies ist ein Text mit einem doppelten \" im String";
    console.log(escapeGans);
    const escapeGans2 = 'Dies ist ein Text mit einem einzelnen \' im String';
    console.log(escapeGans2);

console.log("===============================================================================");

// String Funktionen/Methoden
    // .length; gibt uns die anzahl der zeichen in einem string.
    const lengthExample = 'Dies ist ein String'.length;
    console.log('Anzahl der Zeichen im String:', lengthExample);

    // .charAt(); zeigt uns ein zeichen innerhalb des strings an einer gewünschten position, gezählt von 0.
    const charAtExample = 'Dies ist ein String'.charAt(2);
    const charAtExample2 = 'Dies ist ein String'[2];

    /**
     * 00 = D
     * 01 = i
     * 02 = e
     * 03 = s
     * 04 = 
     * 05 = i
     * 06 = s
     * 07 = t
     * 08 = 
     * 09 = e
     * 10 = i
     * 11 = n
     * 12 =
     * 13 = S
     * 14 = t
     * 15 = r
     * 16 = i
     * 17 = n
     * 18 = g
     */
    
    console.log('Zeichen an Position Zwei:', charAtExample);
    console.log('Zeichen an Position Zwei:', charAtExample2);

    // .toLowerCase();
    // mit .toLowerCase(); können wir einen string zu kleinschreibung zwingen.
    const lowerCaseExample = 'Dies ist ein STRING'.toLowerCase();
    console.log('Klein geschrieben:', lowerCaseExample);

    // .toUpperCase();
    // mit .toUpperCase(); können wir einen string zu Großschreibung zwingen.
    const upperCaseExample = 'dies ist ein string';
    console.log('Groß geschrieben:', upperCaseExample.toUpperCase());

    // .included();
    // mit .includes können wir prüfen, ob ein zeichen, oder mehrere innerhalb eines strings existieren.
    const includesExample = 'Dies ist ein String';
    console.log('Beinhaltet \'String\':', includesExample.toLowerCase().includes('str'));

    // .replace();
    // mit .replace(); können wir zeichen oder zeichenketten innerhalb eines strings Ersetzen.
    // Der erste wert ist der gesuchte, und der zweite wert ist der ersatz dafür.
    const replaceExample = 'Dies ist ein String'.replace('Str', 'Käsekuchen');

    // Beispiel mit globaler ersetzung, also allen vorkommnissen des gesuchten strings.
    // const replaceExample = 'Dies ist ein String String'.replace(/Str/g, 'Käsekuchen');
    console.log('Ersetzter String:', replaceExample);
    
    // .trim();
    // mit .trim(); können wir whitespace (leerzeichen) aus einem string am anfang und ende löschen.
    const trimExample = '       "Passwort"     ';
    console.log('Ungetrimmter String:', trimExample);
    console.log('Getrimmter String:', trimExample.trim());

    // .substring();
    // mit .substring(); können wir teile des Strings ausschneiden. die erste stelle sagt von wo, und die zweite, optionale stelle, bis wohin.
    const substringExample = 'Dies ist ein String';

    console.log('Ab der 5. stelle:', substringExample.substring(5));
    console.log('Von der 0-4 stelle:', substringExample.substring(0, 4));

    console.log("===============================================================================");

// Template literals
    /**
     * @see https://css-tricks.com/template-literals/
     */

    // Mit template literals können wir werte berechnen oder ganze code strukturen in einen string einfügen.

    const templateLiteralExample1 = `Ich hätte gerne einen tisch für ${ 3 * 2 } Personen`;
    console.log(templateLiteralExample1);

    let personName = "Mahmut";
    console.log(`Hallo, mein name ist ${ personName.toUpperCase() }`);

    // Multiline und zusammenfügungs beispiele:
    const testString1 = "Dies\nsind\nmehrere\nzeilen";
    console.log(testString1);
    const testString2 = "Dies \
    sind \
    mehrere \
    zeilen \
    die \
    zu \
    einer \
    werden";
    console.log(testString2);
    const testString3 = "Dies " +
    "ist " +
    "etwas " +
    "text ";
    console.log(testString3);
    const testString4 = `Dies
ist
etwas
${ "Käse" }
${ 8 - 2 }
text`;
    console.log(testString4);
