// wir importieren dotenv:
require('dotenv').config();

// wir importieren das modul jsonwebtoken, zu dem wir hier mehr informationen finden: https://www.npmjs.com/package/jsonwebtoken und zu jwt allgemein hier: https://jwt.io/
const jwt = require('jsonwebtoken');

// wir importieren auch crypto:
const crypto = require('crypto');

// wir holen uns das secret aus der .env, diesmal erstellen wir aber ein produktionsrelevantes secret mit hilfe von crypto, dies ist normalerweise ein 64 bit hex string, den wir hier auch in javascript erstellen können:
// console.log(crypto.randomBytes(64).toString('hex'));
// wir lassen uns den string in der konsole anzeigen, kopieren ihn von hier aus in die .env und importieren ihn:
const secret = process.env.TOKEN_SECRET;

/*
    um einen token zu erstellen benötigen wir ein paar daten:
    - das token secret
    - die daten die wir innerhalb des tokens speichern wollen
    - eine ablaufzeit
    
    die daten die wir als payload speichern können sowohl kleinere datenmengen, wie zum beispiel eine USERID, wie auch komplexere objelte beinhalten, sollten aber in jedem falle den user identifizieren können. Außerdem sollten wir eine ablaufzeit für den token übergeben, so das der user nicht für immer eingeloggt bleibt, der standard sind hier 30 bis 45 minuten, aber es kann von service zu service unterschiedlich sein.
*/

// wir schreiben eine funktion, die die token signatur für uns erstellt:
const signAccessToken = (data) =>
{
    // wir nutzen die jwt methode .sign(); um eine signatur zu erstellen, wir übergeben ihr die daten, unser secret, und die expiration time in sekunden, minuten, stunden oder tagen. Im standard geben wir unsere zeit in sekunde an:
    const signedJWT = jwt.sign(data, secret, { expiresIn: '1800s' });

    // wir returnen den token:
    return signedJWT;
}

// wir testen unsere funktion in dem wir ihr einen usernamen übergeben:
const newToken = signAccessToken({ username: "TestUser", lieblingsfarbe: "gelb" });

// wir lassen uns den token in der konsole ausgeben:
console.log(newToken);
// wir sehen das der token ausgegeben wurde, und das er aus den 3 vorher erwähnten teilen besteht:

// den ausgegebenen token können wir uns aus der konsole kopieren und als variable speichern, damit wir ihn gleich wieder dekodieren können:
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RVc2VyIiwibGllYmxpbmdzZmFyYmUiOiJnZWxiIiwiaWF0IjoxNjQ2NjQ0NzM4LCJleHAiOjE2NDY2NDY1Mzh9.AO21yQs2woScQD-kmADdPHXDZa-L98g_xhgrT8iIRFA";

/*
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.                                             = HEADER
  eyJ1c2VybmFtZSI6IlRlc3RVc2VyIiwiaWF0IjoxNjQ2NjQzOTI2LCJleHAiOjE2NDY2NDU3MjZ9.     = PAYLOAD
  tPScegSgFdb-GEo1wnd_ap16kid5hEddpoyf5bCRRWM                                       = SIGNATUR
*/

// um den token zu verfizieren, schreiben wir eine funktion, der wir den token übergeben:
const verifyAccessToken = (token) =>
{
    // wir nutzen die jwt methode .verify(); um zu prüfen ob der token mit den erwarteten daten gleich ist, also ob das secret mit den daten und dem token gemeinsam das selbe ergebnis liefert:
    jwt.verify(token, secret, (err, tokenData) =>
    {
        // wenn der token inkorrekt ist, geben wir einen fehler aus:
        if(err)
        {
            throw new Error(err);
        }

        // sollten die verfikation klappen, geben wir die daten des payloads zurück:
        console.log(tokenData);
    });
}

// wir führen die funktion aus, und testen ob der token korrekt ist:
verifyAccessToken(token);

// wenn der token eine fehlerhafte signatur hat, bekommen wir einen fehler ausgegeben der uns sagt das die signatur nicht stimmt, stimmt der token nicht, oder ist abgelaufen bekommen wir "invalid token" zurück.

// Sollte die signatur stimmen, bekommen wir wichtigen daten zurück:
// - die daten die wir übergeben wollten
// - den IAT (issuedAt), der zeitpunkt an dem die verfikation angefragt wurde
// - die exp (expiration date), der zeitpunkt an dem die verfikation abläuft

// Wie wir sehen könenn wir so sicher daten austauschen, also sollten wir gleich das ganze in express testen um die übertragung und dekodierung zwischen client und server zu testen.
