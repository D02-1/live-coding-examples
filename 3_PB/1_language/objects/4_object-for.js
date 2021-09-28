// Zusätzlich zu unserem typischen bekannten for-loop gibt es noch weitere for-loop typen:
// - for/in: loopt durch die verschiedenen werte, und behält dabei nicht unbedingt die reihenfolge bei.
// -for/of: loopt durch verschiedene werte mit zählbarem inhalt, in der richtigen reihenfolge.

// for/in ist der typische weg durch objekte oder arrays zu loopen.
// einfach gesagt: er geht jeden eintrag durch und gibt ihn aus.

const testArray = [ "a", "b", "c", "d", "e" ];

// normaler for-loop
for (let i = 0; i < testArray.length; i++)
{
    console.log(testArray[i]);
}

const items = [ "Schuhe", "Besen", "Tasse", "Kuchen" ]

// for/in nutzt den wert als iterator für die sammlung
for (const item in items)
{
    console.log(items[item]);

    if(item == "firstName")
    {

    }
}

console.log("=".repeat(50));

// for/of nutzt den aktuell angesprochenen wert
for (const item of items)
{
    console.log(item);
    
    if(item == 1)
    {

    }
}

// Bei einer variable on typ, innerhab des for-kopfes ist es möglich sie ausserhalb des for-loops anzusprechen, das kann zu unerwünschten nebeneffekten führen.

// let index = 20;

// for (index = 0; index < array.length; index++)
// {
//    const element = array[index];
// }

/**
 * Die unterschiede zwischen den beiden for-loops:
 * | benutzbar für | for/in | for/of |
 * |---------------|--------|--------|
 * | Objekte       | ja     | nein   |
 * | Arrays        | ja     | ja     |
 * | Strings       | ja     | ja     |
 */

console.log("=".repeat(50));

const user = [ "Max", "Mustermann", 25 ];
console.log(user[1]);

const user2 = 
{
    age: 25,
    lastName: "Mustermann",
    firstName: "Max",
};

console.log(user2.firstName);

console.log("=".repeat(50));

// for/in nutzt den wert als iterator für die sammlung
for (const item in user)
{
    if(user2["firstName"])
    {
        console.log("for/in:", user[item], item);
    }
    else
    {
        console.log("nicht gefunden")
    }
}

// for/of nutzt den aktuell angesprochenen wert
for (const item of user)
{
    
    if(user[1])
    {
        console.log("for/of:", item, item);
    }
    else
    {
        console.log("nicht gefunden")
    }
}
