// wir importieren chai:
const chai = require('chai');
const { describe, it } = require('mocha');

/*
    chai bietet uns mehrere verschiedene assertion styles:

    den "assert style", in dem wir einfach sagen "das ist so":
    beispiel:
    const assert = chai.assert;
    const testArr = [1, 2, 3, 4, 5];

    // wir sagen wir nutzen die methode .isArray(); von assert, um zu prüfen ob das getestete element ein array ist. Wir übergeben das array und geben an, was wir als string im test ausgeben wollen:
    assert.isArray(testArr, 'is array of numbers');

    der "expect style", in dem wir sagen was wir vom code erwarten:
    const expect = chai.expect;
    expect(testArr).to.be.an('array');

    den "should style", in dem wir sagen was wir gern hätten, also wie etwas sein sollte wenn der code funktioniert:
    const should = chai.should;
    testArr.should.be.an('array');
*/

// wenn wir zu diesem zeitpunkt npm run test ausführen, bekommen wir keine fehlermeldung mehr, weil eine test datei existiert, und es wird gesagt das 0 tests ausgeführt wurden. 

// wir sagen chai, das wir expect nutzen wollen:
const expect = chai.expect;

// wir importieren unsere applikation:
const colorConverter = require('./../src/index');

// die methode describe von mocha ist ein hook, der uns überschriften, und sub überschriften, oder sub sub sub sub sub sub überschriften für themengebiete erstellen lässt, die wir testen können. das erste describe enthält normalerweise den namen der applikation oder funktionalität die wir testen wollen:
describe('colorConverter;', () =>
{
    // die subkategorie enspricht meist der funktion, die ausgeführt wird, als beschreibung:
    // wir sagen wir wollen "RGB zu HEX konveriteren":
    describe('RGB to HEX conversion', () =>
    {
        // wir lassen ein paar farben von rgb zu hex umwandeln, und nutzen dafür unsere eigene methode .rgbToHex(); aus der applikation:
        const redInHex = colorConverter.rgbToHex(255, 0, 0);
        const blueInHex = colorConverter.rgbToHex(0, 0, 255);

        // als nächstes geben wir mit it(); an, was die funktion tun soll:
        it("converts red color", () =>
        {
            // wenn wir den test jetzt ausführen, sehen wir, das colorConverter; angesprochen wurde, das es RGB zu HEX umwandelt, und das es erfolgreich die standardfarbe umgewandelt hat...erfolgreich, da eine leere testkondition ein erfolgreicher test ist. also sollten wir einen richtigen test hier rein schreiben, um uns zu beweisen, das es wirklich funktioniert.
            
            // wir geben in leserlichen, englischen setzen an, was wir vom return erwarten:
            expect(redInHex).to.equal('ff0000');

            // wir führen den test aus und bekommen ein grünes häkchen. ändern wir den wert bei .equal(); bekommen wir genaue fehlerinformationen.
        });

        // ein weiterer versuch:
        it('converts blue color', () =>
        {
            // wir erwarten das blueInHex 0000ff gleicht:
            expect(blueInHex).to.equal('0000ff');
        });

        // wir schreiben noch einen test für diese funktion, um sicherzugehen, das es sich bei de output um einen string handelt:
        it('returns a string', () =>
        {
            // wir erwaerten das redInHex ein string ist...
            expect(redInHex).to.be.a('string')
            // ...was wir auch testen können, ist, da wir wissen, das ein hex color code immer 6 zeichen hat, ob dies zutrifft, dafür können wir auch method chaining benutzen:
            .and.to.have.lengthOf(6);
        });
    });

    // wir sagen wir wollen "HEX zu RGB konvertieren":
    describe('HEX to RGB conversion', () =>
    {
        // wir lassen uns eine farbe von hex zu RGB umwandeln, und nutzen dafür unsere eigene methode .hexToRgb(); aus der applikation:
        const greenInRgb = colorConverter.hexToRgb("00ff00");

        it('converts green color', () =>
        {
            expect(greenInRgb)
            // wir erwarten, das greenInRgb ein array ist
            .to.be.a('array')
            // das es 3 einträge hat
            .and.to.be.lengthOf(3)
            // es die werte 0, 255 und 0 hat:
            .to.deep.equal([0, 255, 0])
            // und keine nummer ist
            .and.not.to.be.a('number');
            
            // wenn wir jetzt npm run test ausführen, sehen wir das nyc uns sagt das wir 100% code coverage erreicht haben.

            // eine liste weiterer befehle finden wir hier: https://www.chaijs.com/api/bdd/
        });
    });

    // innerhalb jedes describe blocks können wir, abgesehen von den tests noch dinge vor oder nachher innerhalb eines blockes ausführen, wie zum beispiel eine datenbankverbindung aufbauen, oder einen testbenutzer zu löschen:

    // wir führen vor dem ersten test etwas aus:
    before(() =>
    {
        console.log("vor allen tests");
    });

    // wir führen nach dem letzten test etwas aus:
    after(() =>
    {
        console.log('nach allen tests');
    });

    // wir führen vor JEDEM einzelnen test etwas aus:
    beforeEach(() =>
    {
        console.log('vor jedem test');
    });

    // wir führen nach JEDEM einzelnen test etwas aus:
    afterEach(() =>
    {
        console.log('nach jedem test');
    });
});
