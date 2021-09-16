function aussen()
{
    let ersteNummer = 10;

    return function()
    {
        ersteNummer++;
 
        console.log('erste nummer:', ersteNummer);
    }
}

// Wir haben 2 funktionen:
// - Die "aussen" funktion, die die variable "ersteNummer" beinhaltet und die 'innere' funktion returned;
// - Die 'innere' funktion, die die variable "zweiteNummer" beinhaltet und die 'äussere variable 'ersteNummer' innerhalb des code-blocks anspricht.

// Das Scope der variable ersteNummer ist auf die funktion beschränkt.
// Das Scope der variable zweiteNummer ist auf die innere funktion beschränkt.

const ersteFunktion = aussen();

ersteFunktion();
ersteFunktion();
ersteFunktion();
ersteFunktion();
ersteFunktion();
