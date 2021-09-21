// Der spread operator gibt uns die möglichkeit, mehrere werte aus einer array oder einem objekt zu benutzen, ohne das wir von vorneherein wissen müssen, wieviele inhalte das übergebene element hat.

const unsereArray = [ 1, 2, 3 ];

console.log(...unsereArray);

function unsereFunktion(input1, input2, input3)
{
    console.log('mit spread', input1);
    console.log(input2);
    console.log(input3);
}

function unsereAndereFunktion(input)
{
    console.log('Ohne spread', input[ 0 ]);
    console.log(input[ 1 ]);
    console.log(input[ 2 ]);
}

unsereFunktion(...unsereArray)
unsereAndereFunktion(unsereArray);

console.log('='.repeat(50));

const currentDate = [ 2021, 8, 22 ];
//  2021, 8, 22
const neuesDatum = new Date(...currentDate);
// normalerweise:  new Date(Jahr, Monat, Tag);

console.log(neuesDatum);

console.log('='.repeat(50));

const neueFruechte = [ 'Apfel', 'Birne', 'Himbeere' ];
const fruchtliste = [ 'Erdbeere', 'Kiwi', ...neueFruechte, 'Banane' ];

console.log(fruchtliste);

console.log('='.repeat(50));

const array1 = [ 1, 2, 3 ];
const array2 = [ ...array1 ];

console.log(array1);
console.log(array2);
console.log([...array1, ...array2]);

console.log('='.repeat(50));

// in einer funktion nennt man den spread args, weil es argumente sind die man übergibt. Dies nennt man dann rest operator, nicht spread operator weil sie beliebig viele parameter empfangen können.
function sumAll(...senf)
{
    let sum = 0;

    // arguments ist die funktionsinterne array, die alle parameter auffängt, arrow functions haben allerdings kein arguments.

    console.log('Der erste Parameter', arguments[0]);

    for(let arg of arguments)
    {
        sum += arg;
    }

    // Mit arguments.length können wir herausfinden, wieviele parameter übergeben wurden.
    console.log('Wieviele parameter bekommt unsere funktion?', arguments.length);

    return sum;
}

console.log(sumAll(1));
console.log(sumAll(1, 2));
console.log(sumAll(1, 2, 3));

console.log('='.repeat(50));

// Der unterschied zwischen dem spread und dem rest operator ist, das der spread operator die inhalte einer array übernimmt, und der rest operator dafür da ist, in einer funktion unendlich viele parameter zu übergeben, die syntax ist die selbe.

function testFunktion(input1, ...args)
{
    console.log('Wieviele parameter haben wir übergeben?', arguments.length);

    console.log('input1', input1);

    const neueArray = [ ...args[0], 4, 5, 6 ];
    console.log(neueArray, args[1]);
}

//          arguments[0], arguments[1] / args[0], arguments[2] / args[1]
testFunktion("A",         [ 1, 2, 3 ],            "hallo");