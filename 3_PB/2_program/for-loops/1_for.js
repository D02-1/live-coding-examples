/**
 * Simpler for-loop
 * @description ein for loop lässt uns aktionen beliebig oft wiederholen, und wir können steuern wie oft, oder ob ein zähler übersprungen wird.
 */

// Simpler for-loop mit iteration, zeigt text 5 mal nacheinander an.

let counter = 5;

for (let i = 0; i < counter; i++)
{
    console.log(i, 'Hallo Welt!');
}

// statement 1: let i = 0;      = wird einmal ausgeführt bevor der codeblock ausgeführt und legt den anfang der iteration fest.
// statement 2: i < counter;    = definiert die kondition zum ausführen und beenden des code-blocks.
// statement 3: i++             = wird nach jedem durchlauf ausgeführt und verändert die iterationszahl.

/**
 * Logik:
 * - wo fängt der zähler an? 0
 * - ist die kondition eingetroffen, um zu wiederholen? ist i weniger als 5?
 * - wurde der code-block ausgeführt? wenn ja, erhöhe i um 1, und wiederhole den code block.
 */

/**
 * Wir können uns das ganze auch mal zur vereinfachung als tabelle vorstellen:
 * 
 * | Iteration | Variable | Kondition      | Aktion                         |
 * |-----------|----------|----------------|--------------------------------|
 * | 1         | i = 0    | 0 < 5 == true  | console.log(...);              |
 * | 2         | i = 1    | 1 < 5 == true  | console.log(...);              |
 * | 3         | i = 2    | 2 < 5 == true  | console.log(...);              |
 * | 4         | i = 3    | 3 < 5 == true  | console.log(...);              |
 * | 5         | i = 4    | 4 < 5 == true  | console.log(...);              |
 * | 6         | i = 5    | 5 < 5 == false | break;                         |
 */

console.log('='.repeat(50));

// wir können unsere variable i, die wir innerhalb des loops angelegt haben, auch nur innerhalb des code blocks benutzen.

// Ein simpler for-loop mit iteration und sinnvoller nummerierung in der ausgabe.
for (let i = 0; i < counter; i++)
{    
    console.log(`Iteration: ${ i + 1 }`);
    // console.log('Iteration:', i + 1);
}

console.log('='.repeat(50));

// Wir können einen for-loop auch anhand von bestimmten konditionen unterbrechen:
counter = 20;
const breakpoint = 11;

for (let i = 0; i < counter; i++)
{
    if(i == breakpoint)
    {
        // Mit break; können wir, genau wie in switches einen loop unterbrechen.
        break;
    }

    if(i == 4)
    {
        // mit continue; kann ein iterator übersprungen werden.
        continue;
    }

    console.log(`Durchlauf nummer ${i}`);
}

console.log('='.repeat(50));

// Wir könenn auch mehrere for-loops ineinander verschachteln, um beispielsweise eine tabelle zu füllen.
const rows = 5;
const columns = 5;

for (let i = 0; i < rows; i++)
{
    let ausgabe = "|";

    for (let j = 0; j < columns; j++)
    {
        // console.log(`row: ${ i + 1 } | columns: ${ j + 1 }`);

        ausgabe += ` ${ j + 1 } |`;
    }

    console.log(`${ i + 1 }: ${ ausgabe }`);
}

// Ein unendlicher loop wird so lange laufen, bis der speicher voll ist und sollte deswegen niemals ausgeführt werden!!!

for(let i = 1; i > 0; i++)
{
    console.log('Bis zur unendlichkeit und noch viel weiter!');
}
