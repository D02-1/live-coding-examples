// es gibt noch eine andere art des imports, mit dem wir alle werte, funktionen und klassen als namespace importieren können

const firstName = "Max";
const lastName = "Mustermann";
const age = 25;
const roles = [ "Member", "Admin" ];

const testFunktion = () =>
{
    console.log("hallo");
}

export {
    firstName,
    lastName,
    age,
    roles,
    testFunktion
}
