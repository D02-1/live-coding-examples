// Ein while-loop, loopt durch einen code-block, bis die gewünschte kondition nicht mehr eintritt.

let i = 0;

// *solange = while / * während X zutrifft
while(i < 10)
{
    console.log('i ist ' + i);
    
    i++;
}

console.log('='.repeat(50));

// Wir können mehrere kondition in einem while-loop checken, oder anhand von einem boolean uns selbst aus dem loop werfen.

let isRunning = true; // unser loop läuft solange "isRunning" true ist.
let counter = 0;      // unser counter wird mit jedem durchlauf um 1 addiert.

while(isRunning && counter < 5)
{
    console.log('Running: ' + counter);

    if(counter === 2)
    {
        isRunning = false;
    }

    counter++;
}

console.log('='.repeat(50));

// Videospiele nutzen IMMER while-loops mit einem true für den update loop
// der jede frame ausgeführt wird.
// Bei einem spiel mit 60FPS (Frames-per-second) wird dieser while-loop also 60 mal die sekunde ausgeführt. im gegensatz zu einem infinite loop mit einer for-schleife kann ein while loop, wie wir sehen, nämlich unterbrochen werden.

// let points = 0;

// while(true)
// {
//     // Update:
//     // Spielerposition
//     // Gegnerposition
//     // Munition
//     // Punkte
//     points++;
//     console.log(points);
// }