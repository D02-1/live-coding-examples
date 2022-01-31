const [ node, script, ...args ] = process.argv;

// Version mit Namen durch argumentübergabe:

// args[0] = Alter
// args[1] = Name

// if(args[0] > 18)
// {
//     console.log(`Hallo ${ args[1] !== undefined ? args[1] : "Mein Freund" }, Du bist alt genug`);
// }
// else
// {
//     console.log(`Hallo ${ args[1] !== undefined ? args[1] : "Mein Freund" }, Du bist leider zu jung!`);
// }

// Version mit namen aus dem betriebssystem: 

// args[0] = Alter

if(args[0] > 18)
{
    console.log(`Hallo ${ process.env.USER }, Du bist alt genug`);
}
else
{
    console.log(`Hallo ${ aprocess.env.USER }, Du bist leider zu jung!`);
}
