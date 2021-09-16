// Wir können funktionen als wert übergeben und mit aufrufen.

/**
 * @function sagHallo
 * @param { string } gruss 
 * @returns { string }
 */
function sagHallo(gruss = 'Hallo')
{
    return `${ gruss }, `;
}
// gibt aus 'Hallo, ';

function gruessen(gruss, name)
{
    console.log(gruss + name);
}

//       gruss       name
gruessen(sagHallo(), "Houman");
