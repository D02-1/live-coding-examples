// In express haben wir die möglichkeit mithilfe des sogenannten Routers pfade mit eigenen methoden oder auch eigene middleware innerhalb einer spezifischen route anzulegen, so können wir sortiert und übersichtlich arbeiten.

/*
    Logik:
    als beispiel wollen wir eine api anlegen, in der wir den user anlegen können, den user löschen können, und ihn bearbeiten können. Außerdem hätten wir noch routen um posts zu erstellen, zu editieren, und zu löschen... mit unserem bisherigen wissen würden wir also folgende routen erstellen:
    POST    /users/
    GET     /users/:id
    DELETE  /users/:id
    PUT     /users/:id
    POST    /posts/
    GET     /posts/:id
    GET     /posts/
    DELETE  /posts/:id
    PUT     /posts/:id

    Wenn wir uns überlegen das wir nicht nur user und posts managen wollen, sondern auch kategorien und anderes, wird unsere app schnell sehr groß und wir müssen viel lesen um zu sehen wo wir welche route haben.

    mit express.router(); können wir stattdessen 2 routen anlegen:
    /users
    /posts
    
    und alles weitere, was wir in diesen routen machen wollen würden, wie methoden oder middleware, in eigene dateien speichern, das sorgt fur schnelleres arbeiten, übersichtlichkeit und einfacheres verständnis für unseren code.
*/

const express = require('express');

// anstelle von einer methode, nutzen wir middleware, in der wir weitere routen übergeben.

// wir erstellen eine datei (routes/users.js) in der wir die routen anlegen.

// wir importieren die router datei:
const users = require('./../routes/users.js');
const posts = require('./../routes/posts.js');

const app = express();
const port = 3000;

// wir legen eine middleware an, die die pfade unterhalb des gewünschten hauptpfades managed.
app.use("/users", users);
app.use("/posts", posts);

app.listen(port, () => console.log("Server läuft auf port", port));
