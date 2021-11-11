// wir erstellen eine funktion um einen wert mal 2 zu nehmen:
const getTimesTwo = (value) =>
{
    return value * 2;
}

// wir erstellen eine funktion um den wert mal 4 zu nehmen:
const getTimesFour = (value) =>
{
    return value * 4;
}

// wir erstellen eine funktion um unsere seit anzuzeigen:
const buildPage = (input) =>
{
    const appElement = document.getElementById('app');

    appElement.innerHTML = `
        <ul>
            <li>testwert 1: ${ input.timesTwo }</li>
            <li>testwert 2: ${ input.timesFour }</li>
        </ul>
    `;
}

// wir exportieren mit sogenannten "named exports"
export {
    // wir können unsere funktionen exportieren, indem wir ihren namen in das export objekt schreiben
    getTimesTwo,
    getTimesFour,
    // beim export können wir mit as den namen ändern
    buildPage as makePage
}
