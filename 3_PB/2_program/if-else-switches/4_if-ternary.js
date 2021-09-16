/**
 * Ternary Operator
 * @description Mit einem ternary operator können wir wir if/else abfragen abkürzen, und die gefragte ausgabe direkt in einer variable speichern.
 */

console.log('='.repeat(50));

const testBool = true;

if(testBool === true)
{
    console.log('(Boolean) Dies ist wahr');
}
else
{
    console.log('(Boolean) Dies ist falsch');
}

const ternaryCheck =
testBool ? 
'(Boolean) Dies ist wahr' // IF 
: 
'(Boolean) Dies ist falsch'; // ELSE

console.log(ternaryCheck);

console.log('='.repeat(50));

{/* <div style={`background: ${ isLoggedIn ? "#00FF00" : "#FFCC00" }`}></div> */}

const speed = 240;

const ternaryCheck2 = 
speed >= 120 ? 'ZU SCHNELL' // IF: speed größer als gleich 120 
:
speed >= 80 ? 'SCHNELL' // ELSE IF: speed größer als gleich 80
:
'ALLES GUT'; // ELSE

//                         if  {                   } else if {               } else {          }
// const ternaryCheck2 = speed >= 120 ? 'ZU SCHNELL' : speed >= 80 ? 'SCHNELL' : 'ALLES GUT';

console.log(ternaryCheck2);

console.log('='.repeat(50));



const testValue = 1;
let isTrue; 
// ist es wahr das testvalue 1 ist ? ja : nein;

/*
if(testValue === 1)
{
    isTrue = true;
    console.log(isTrue);
}
else
{
    isTrue = false;
    console.log(isTrue);
}
*/

// ist es wahr, das testvalue 1 ist? ja   : nein;
      isTrue = testValue === 1     ? true : false;
// const isTrue = testValue === 1;

console.log(isTrue);

// Beispiel aus wiederholung mit kürzerem ternary
const speed = 33;

speed === 33 && console.log(`${ speed } km/h`);
// speed === 33 ? console.log(`${ speed } km/h`) : null;

// als if ohne else:
if(speed === 33)
{
    console.log(`${ speed } km/h`);
}
