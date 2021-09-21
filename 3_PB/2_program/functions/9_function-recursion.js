
/**
 * Rekursion ist eine funktion die sich selbst aufruft
 * 
 * function funktionsName(x)
 * {
 *      Eine sektion zum abbrechen der funktion, wenn etwas schief geht.
 *      if(x < 0) return;
 * 
 *      Eine sektion zum beenden der funktion ohne fehler, das so genannte "Base Case".
 *      if(x === 0) return 1;
 * 
 *      Eine sektion für die rekursion selbst, in der wir die funktion wieder selbst aufrufen
 *      return funktionsName(x - 1);
 * }
 */

// Ein bekanntes beispiel für die rekursion ist das faktorial

// Diese berechnung soll die angegebene nummer immer wieder mit sich selbst multiplizieren, minus 1.
// Beispiel: 4 = 4 * 3 * 2 * 1 = 24

function factorial(num)
{
    if(num < 0)
    {
        return;
    }

    if(num === 0)
    {
        return 1;
    }

    return num * factorial(num - 1);
}

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(8));

function countDown(num)
{
    if(num < 0)
    {
        return;
    }

    if(num === 0)
    {
        return 1;
    }

    console.log(num);

    // Die funktion ruft sich selbst wieder auf
    countDown(num - 1);
}

countDown(5);