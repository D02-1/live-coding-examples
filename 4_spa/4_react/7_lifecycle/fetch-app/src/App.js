import './App.css';

// Wir wollen uns per fetch die informationen eines todos von jsonplaceholder holen, wir nehmen dafür das beispiel auf der startseite von jsonplaceholder.

// 1. Als erstes importieren wir wieder React, useStste und useEffect von react
import React, { useState, useEffect } from 'react';

function App()
{
    // 2. dann bauen wir uns einen state für die infos, den wir befüllen wollen. Wir geben ihm ein leeres objekt, da wir bei jsonplaceholder sehen, das wir ein objekt zurückbekommen.
    const [ data, setData ] = useState({});
    // 3. Außerdem bauen wir uns einen state, mit dem wir sagen das die seite gerade geladen wird, wir setzen den initialwert auf true
    const [ loading, setLoading ] = useState(true);

    // 6. Wenn wir das fetch direkt in den komponenten schreiben wir er mehrmals, immer wieder ausgeführt, absolut unkontrolliert, das wollen wir nicht. Wir wollen das er direkt beim aufbau des komponentzen ausgelöst wird, und dann nicht mehr.
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => console.log(json))

    // 7. Also verscuhen wir es mit useEffect
    useEffect(() =>
    {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            setData(json);
            setLoading(false);
        });

        // 9. Siehe da, fetch wir nur noch ein einziges mal ausgelöst, jetzt können wir die daten an den state übergeben, und auch unser loading au false setzen.
    }, []);

    return (
        <div style={{ marginLeft: "25px" }}>
            {/* 4. Jetzt bauen wir eine rudimentäre seite, auf der wir die informationen zeigen, die wir hoffen vom fetch zu bekommen */}
            {
                !loading ?
                <>
                    <h3>Post { data.id }</h3>
                    <ul>
                        <li>User ID: { data.userId }</li>
                        <li>Title: { data.title }</li>
                        <li>Completed: { data.completed ? "true" : "false" }</li>
                    </ul>
                </>
                :
                <h3>Loading...</h3>
            }

            {/* 5. Da data ein leeres objekt ist, bekommen wir keine daten angezeigt. */}
        </div>
    );
}

export default App;
