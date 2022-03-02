// wir importieren validator
const validator = require('validator');

// mit validator können wir jetzt checken, ob strings den gefragten inhalt haben. Validator arbeitet ausschließlich mit strings, wir sollten also sicher sein, das der eingegebene wert ein string ist. Dies können wir zum beispiel erreichen indem wir die string methode .toString(); auf den wert anwenden, oder am ende des übergebenen wertes "+ ''" eingeben, dies wandelt jeden wert in einen string um.

// wir können zum beispiel überprüfen ob ein string eine email adresse ist:

// wir erstellen eine variable, die eine email adresse beinhaltet:
const testEmail1 = "ich@du.de"; // ein string mit 0 bis X punkten, ein @, ein string mit 0 bis x bindestrichen einem . und einer domain, oder einem weiteren punkt mit noch einer domain endung.

// wir erstellen eine variable, die keine email adresse beinhaltet:
const testEmail2 = "käsekuchen";

// wir nutzen die validator methode .isEmail(); um die werte zu überprüfen:
console.log("E-Mail:", validator.isEmail(testEmail1)); // wir bekommen true zurück
console.log("E-Mail:", validator.isEmail(testEmail2)); // wir bekommen false zurück

// wir können auch auch andere stringarten testen, wie zum beispiel ob ein string lowercase ist:
const testLowercase1 = "hallowelt";
const testLowercase2 = "HalloWelt";

// wir nutzen die methode .isLowercase(); um zu überprüfen, ob der string in lowercase geschrieben ist:
console.log("Lowercase:", validator.isLowercase(testLowercase1)); // wir bekommen true zurück
console.log("Lowercase:", validator.isLowercase(testLowercase2)); // wir bekommen false zurück

// wir können mit validator nicht nur strings überprüfen, sondern auch ändern, so können wir zum beispiel mit der methode .escape(); html in einen escape string umwandeln:
const htmlString = "<p>Hallo welt!</p>";
console.log("HTML:", htmlString);
console.log("HTML:", validator.escape(htmlString));

// wir können den string mit .unescape(); auch wieder umwandeln:
const escapedHTMLString = validator.escape(htmlString);
console.log("HTML:", validator.unescape(escapedHTMLString));

// wir können werte aus strings auch umwandeln:
const boolString = "true";
const numberString = "5";
const floatString = "2.5";

// mit .toBoolean(); können wir einen string in einen boolean umwandeln:
console.log("Boolean:", boolString, validator.toBoolean(boolString));

// mit .toInt(); können wir einen string in einen integer, also eine nummer umwandeln:
console.log("Int:", (numberString + 5), (validator.toInt(numberString) + 5));

// mit .toFloat(); können wir einen string in eine floating number, also eine kommazahl umwandeln:
console.log("Float:", floatString, validator.toFloat(floatString));

// validator kann noch viel mehr, aber wir wechseln gleich zu einer anderen version von validator, die mit express und mongoose im backend zusammen arbeiten kann. mehr informatonen zu validator.js selbst finden wir hier: https://github.com/validatorjs/validator.js

/*
    // mit validator.js
    app.post("/users", (req, res) =>
    {
        const isThisAnEmail = validator.isEmail(req.body.email);
    });

    // mit express-validator
    app.post('/users',
        validator.body(email).isEmail(),
        (req, res) =>
        {

        }
    );
*/
