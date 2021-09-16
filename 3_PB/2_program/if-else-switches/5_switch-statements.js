/**
 * Switch Statement
 * @see https://love2dev.com/blog/javascript-switch-statement/
 */

// Beispiel mit 'Default' Wert.
const testValue = 2;

//     variable zu prüfen
switch(testValue)
{
    //   wert der variable
    case 1:

        console.log('testValue ist 1');

        // mit dem break statement sorgen wir dafür, das die prüfung abgebrochen wird.
        break;
    case 2:
        console.log('testValue ist 2');
        break;
    case 3:
        console.log('testValue ist 3');
        break;
    default:
        console.log('testValue hat einen anderen wert...');
}

console.log('Hallo');

console.log('='.repeat(50));

// Ein switch wie in der realität (Schalter):
const testValue2 = 1;

switch (testValue2)
{
    case 0:
        console.log('Off');
        break;
    case 1:
        console.log('ON');
        break;
    default:
        console.log('Error');
}

console.log('='.repeat(50));

// Ein beispiel mit strings

const today = 'Friday';

switch (today)
{
    case 'Monday':
        console.log(1);
        console.log('Today is Monday');
        break;
    case 'Tuesday':
        console.log(2);
        console.log('Today is Tuesday');
        break;
    case 'Wednesday':
        console.log(3);
        console.log('Today is Wednesday'); 
        break;
    case 'Thursday':
        console.log(4);
        console.log('Today is Thursday');
        break;
    case 'Friday': // 'Friday' === 'Friday';
        console.log(5);
        console.log('Today is Friday');
        break;
    case 'Saturday':
        console.log(6);
        console.log('Today is Saturday');
        break;
    case 'Sunday':
        console.log(7);
        console.log('Today is Sunday');
    default: 
        console.log(8);
        console.log('Invalid day of week');
}

/**
 * today = Friday
 * 
 * | frage                  | antwort    | ergebnis | aktion                     |
 * |------------------------|------------|----------|----------------------------|
 * | ist today welcher tag? | Monday     | nein     | zum nächsten case springen |
 * | ist today welcher tag? | Tuesday    | nein     | zum nächsten case springen |
 * | ist today welcher tag? | Wednesday  | nein     | zum nächsten case springen |
 * | ist today welcher tag? | Thursday   | nein     | zum nächsten case springen |
 * | ist today welcher tag? | Friday     | ja       | ausführen und abbruch      |
 */

console.log('Prüfung zuende');

console.log('='.repeat(50));

// Advanced Switch

// wochenend und arbeitswochen-beispiel:
const dayOfWeek = 'Saturday';

// Bei leeren cases springt der switch zum nächsten case, der inhalt hat, um diesen auszuführen, bis zur break.

switch (dayOfWeek.toLowerCase())
{
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
    // default:
        console.log('Wir müssen leider arbeiten...', dayOfWeek);
        break;
    case 'saturday':
    case 'sunday':
        console.log('Wochenende!!!');
}

console.log('Prüfung zuende');

const currentDate = new Date();
const currentDay = currentDate.getDay(); // + 3;
let currentDayName;

console.log(currentDay);

switch (currentDay) {
    case 1:
        currentDayName = 'Montag';
        break;
    case 2:
        currentDayName = 'Dienstag';
        break;
    case 3:
        currentDayName = 'Mittwoch';
        break;
    case 4:
        currentDayName = 'Donnerstag';
        break;
    case 5:
        currentDayName = 'Freitag';
        break;
    case 6:
        currentDayName = 'Samstag';
        break;
    case 7:
        currentDayName = 'Sonntag';
    default:
        currentDayName = '';
        break;
}

if(currentDay < 6 && currentDayName.length > 0)
{
    console.log(`Heute ist ${ currentDayName }, und ich muss arbeiten!`);
}
else if(currentDay > 5 && currentDay <= 7)
{
    console.log(`Heute ist ${ currentDayName }, und ich hab wochenende!`);
}
else
{
    console.log('...');
}

const speed = 33;

for (let i = 0; i < speed; i++)
{
    // switch (true)
    // {
    //     case i:
            
    //         if(speed === 33)
    //         {
    //             console.log('33 km/h');
    //         }
    //         break;
    // }

    speed === 33 && console.log(`${ speed } km/h`);
    // speed === 33 ? console.log(`${ speed } km/h`) : null;

    if(speed === 33)
    {
        console.log(`${ speed } km/h`);
    }
}

switch(speed)
{
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:

        if(speed === 33)
        {
            console.log('33 km/h');
        }

        break;
    case speed > 30 && speed <= 80:
        console.log('ziemlich true');
        break;
    case speed > 80 && speed <= 120:
        console.log('brumm brumm');
        break;
}