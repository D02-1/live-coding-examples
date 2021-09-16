// do/while
// Bei einem normalen while-loop wird erst geprüft, ob die kondition zutrifft oder nicht, und erst DANN der block ausgeführt.

let counterWhile = 8;
while(counterWhile < 5)
{
    console.log('Der While counter steht auf ...', counterWhile);
    
    counterWhile++;
}

/**
 * | durchlauf | prüfung | block           |
 * |-----------|---------|-----------------|
 * | 1         | 0 < 5   | counterWhile++; |
 * | 2         | 1 < 5   | counterWhile++; |
 * | 3         | 2 < 5   | counterWhile++; |
 * | 4         | 3 < 5   | counterWhile++; |
 * | 5         | 4 < 5   | counterWhile++; |
 * | 6         | 5 < 5   | break;          |
 */

// Der do/while loop ist eine variante des while loops, der erst den code block ausführt und dann erst prüft ob die gewünschte kondition zutrifft.

// Dieses beispiel wird mindestens einmal ausgeführt, auch wenn die kondition nicht zutrifft.
let counterDoWhile = 8;
do
{
    console.log('Der Do-While counter steht auf', counterDoWhile);
    
    counterDoWhile++;
}
while(counterDoWhile < 5);
