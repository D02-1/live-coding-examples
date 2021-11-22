// Wir importieren die funltionen aus der utils.js mit einem sogenannten deconstructed import.
import {
    // wir übernehmen den namen den wir der funktion gegeben haben:
    getTimesTwo,
    // wir können auch hier den namen ändern, mit as:
    getTimesFour as getFour
} from './utils.js';

// auch: export default class App {}
class App
{
    constructor(value)
    {
        this.value = value;
    }

    createNewValue = () =>
    {
        return {
            // wir nutzen unsere importierten funktionen:
            timesTwo: getTimesTwo(this.value),
            timesFour: getFour(this.value)
        }
    }
}

// Wir nutzen hier den sogenannten "default export", was bedeutet das wir ein einzelnen konstrukt exportieren
// es ist sozusagen der default, der datei
export default App;