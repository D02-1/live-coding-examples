// Math bibliothek

// Um die mathe bibliothek zu nutzen, schreiben wir Math gefolgt von einem Punkt, und dem befehl den wir nutzen wollen.

// Aufrunden / .ceil();
console.log('Aufgerundet:', Math.ceil(2.3));

// Abrunden / .floor();
console.log('Abgerundet:', Math.floor(2.7));

// Random numbers / Zufallszahlen
    // Zufallszahl von 0 -1
    console.log('Zufall von 0-1:', Math.random());

    // Zufallszahl von 0-10, da 0 die startzahl ist, muss die höchste zahl eins höher als die gewünschte zahl sein.
    console.log('Zufall von 0-10:', Math.random() * 11);

    // Kann auch anders geschrieben werden:
    console.log('Alternative:', Math.floor(Math.random() * 10) + 1);

    // 0   = * 10 = 0 + 1 = 1;
    // 0.3 = * 10 = 3 + 1 = 4;
    // 0.7 = * 10 = 7 + 1 = 8;

    // Zufallszahlen von einer start bis zu einer endzahl definieren. (x - y)
    const max = 10;
    const min = 5;
    console.log('Von 5 - 10:', Math.floor(Math.random() * (max - min + 1) ) + min);

    for (let index = 0; index < 100; index++) {

        const random = Math.random();
        const minmax = max - min + 1;
        const floor1 = Math.floor(random);
        const floor2 = Math.floor(random * minmax);
        const floor3 = Math.floor(random * minmax);
        const floor4 = Math.floor(random * minmax + min);

        // console.log(random);
        // console.log(minmax);
        // console.log(floor1);
        // console.log(floor2);
        // console.log(floor3);
        console.log(floor4);

    }