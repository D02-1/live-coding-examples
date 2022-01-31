const [ node, script, ...args ] = process.argv;

const username = "Rick";
const password = "12345ABC";

console.log({ args });

if(args[0] === username && args[1] === password)
{
    console.log("Du bist als Administrator eingeloggt")
}
else
{
    console.log("Kein zugriff");
}
