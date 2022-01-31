// wir können in nodejs bestimmte informationen von außen in unsere applikation speisen, dabei hilft uns das "process;" objekt.

//mit process.version; können wir die aktuelle nodejs version auslesen.
console.log("NodeJS Version:", process.version);

// mit process.release; können wir uns weitere informationen der nodejs version holen:
console.log(process.release);

if(process.version !== "17")
{
    console.log("dieses programm läuft erst ab node version 17");
}

// mit process.versions; können wir weitere informationen zu den internen dependencies von nodejs holen:
console.log(process.versions);

// process.argv; gibt uns den pfad zu nodejs und der aktuelle datei an, wenn wir dort nichts anderes mitangeben.
console.log(process.argv);
console.log(process.argv[1]);

console.log(process);

// process.platform; gibt uns das aktuelle betriebssystem aus, auf dem unser programm gerade läuft.
console.log(process.platform);

// process.arch; gibt uns die architektur des systems aus, auf dem unser program gerade läuft (64 oder 32 bit).
console.log(process.arch);

if(process.arch === "x64")
{
    console.log("Dieses programm läuft nur auf 32 bit systemen");
}

console.log("-".repeat(50));

/*
    process.argv; kann auch genutzt werden, um mit dem programm zu interagieren, es agiert dann als schnittstelle zwischen dem terminal, und der applikation, so können wir in formationen an die app übergeben, wenn wir sie mit programmaufruf schreiben, wie bei sass zb: wenn wir schreiben "sass /inputpfad /outputpfad".
*/

// Wenn wir das argv; objekt außeinandernehmen, können wir auch auf argu,ente von der konsole zugreifen, dafür nutzen wir am besten den spread operator, so erstellen wir ein objekt mit unseren inputs:
const [ node, script, ...args ] = process.argv;

// Die ersten beiden outputs sind node und script, die wir schon von oben kennen. Das letzte sind informationen die wir übergbeen haben, schreiben wir also ein konsolen output für das neue args objekt und starten die applikation mit argumenten neu:
console.log({ args });

// mit disen daten können wir jetzt arbeiten, zb:
if(args[0] === "install" && args[1] === "virus")
{
    console.log("!!!!!!!! INSTALLIERE VIRUS !!!!!!!!");
}
else
{
    console.log("Kenne kommandos nicht!");
}

console.log("-".repeat(50));

// Wir können im backend auch auf umgebungsvariabken zugreifen, und eigene schreiben. Dies ist besonders hilfreich, wenn wir dynamisch in einem projekt angeben wollen, auf welchem PORT unsere applikation läuft, oder wir spezielle authentifikationskeys haben, die nur auf dem server existieren.

// das objekt process.env; gibt uns alle auf dem system gespeicherten informationen aus:
console.log(process.env);

// Wir wir sehen werden environment variablen IMMER groß geschrieben, dies ist wichtig, denn wir werden bald lernen eigenen, projektspezifische ENV's anzulegen.

console.log("-".repeat(50));

// process.env.USERNAME; zum beispiel, gibt uns den benutzernamen auf dem betriebssystem aus:
console.log(process.env.USERNAME);
// oder:
console.log(process.env.USER);

// process.env.HOME; gibt uns den pfad zum Home ordner auf dem betriebssystem wieder
console.log(process.env.HOME);

// process.env.PWD; gibt uns den aktuellen ordner aus, auf dem das programm läuft
console.log(process.env.PWD);

// proccess kann auch als event emitter eingesetzt werden:
// Das event exit wird ausgeführt, wenn das programm beendet wird, da das aktuelle programm bis zum ende durchläuft und dann automatisch beendet wird, sollten wir also am ende immer unsere konsolen mitteilung stehen haben, die wir gleich angeben.
process.on('exit', code =>
{
    // Der status code 0 bedeutet "clean exit", also "erfolgreicher ausgang", und sagt aus das alles super lief und das programm erfolgreich beendet wurde
    console.log("Beendet mit status code:", code);
});

console.log("lalalala irgendwas passiert...");

// Direkt vorm ende können wir auch noch das beforeExit event ausführen.
process.on('beforeExit', code =>
{
    console.log("Dies hier passiert kurz bevor das programm beendet wird");
});
