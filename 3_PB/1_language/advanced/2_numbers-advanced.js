// Numbers

// Nummern mit exponenten-notation (e + anzahl von nullen)
const exponentExample1 = 50000;
console.log(exponentExample1);
const exponentExample2 = 5e4;
console.log(exponentExample2);
// // Um eine größere zahl kurz zu schreiben, können wir den exponenten nutzen, indem wir e plus die anzahl von nullen hinter unsere zahl schreiben

// Strings und nummern kombinieren

    const kombinationExample1 = 4 + "3";
    console.log(kombinationExample1);
    
    // Mit einem plus direkt vor dem string, wandeln wir einen string, der zahlen enthält, in einen integer, also eine nummer, um.
    const kombinationExample2 = 4 + +"3";
    console.log(kombinationExample2);

    // Mit parseInt(); können wir einen string zu einer nummer konvertieren.
    const parseExample1 = '25';
    console.log('String:', parseExample1);
    console.log('Int:', parseInt(parseExample1) );

    // Bei kommazahlen, wird das integer ergebnis gerundet auf die nächste ganze zahl.
    const parseExample2 = '2.5';
    console.log('String:', parseExample2);
    console.log('Int:', parseInt(parseExample2) );

    // mit parseFloat(); können wir kommazahlen im string zu dezimalstellenzahlen, oder floats konvertieren.
    console.log('Float:', parseFloat(parseExample2));

    console.log(4 + parseFloat(parseExample2));

    const umgewandelteZahl = parseFloat(parseExample2);
    console.log(umgewandelteZahl);

    const zahlkommtrein = "273825.2";
    const zahlenAusgabe = parseFloat(zahlkommtrein);
    console.log(zahlenAusgabe);

// Number-precision (Javascript nummern sind akkurat, bis zur 15. stelle):
    console.log(999999999999999);
    console.log(9999999999999999);
