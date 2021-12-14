import './App.css';

// Referenz: https://reactjs.org/docs/hooks-reference.html#useeffect

// Wir können zum beispiel den titel der seite direkt zum anfang des ladens einer komponente ändern, dafür können wir auf den title parameter des document object der dom zugreifen. Das können wir direkt hier machen, über unserem return, allerdings wird unser befehl dann andauernd neu ausgeführt sobald der komponent verändert wird. Das wollen wir nicht. Wenn wir useEffect benutzen. bassiert dies NUR beim laden des komponeten, und wenn wir den titel ändern wollen würden, könnten wir das mit einer event funktion machen.

// Bauen wir dieses konstrukt einmal auf:

// Zu erst importieren wir .useState(); und .useEffect(); von react.
import React, { useState, useEffect } from 'react';

function App()
{
    // als nächtes erstellen wir einen state hook, der unseren seitenTitel speichern soll.
    const [ pageTitle, setPageTitle ] = useState("Unsere tolle App!");

    // Jetzt bauen wir einen useEffect hook, und schauen ihn uns mal an.
    // Wir schreiben useEffect und fügen eine anonyme callback funktion ein, um den ausführen teil unseres seiteneffects in den body zu schreiben.
    useEffect(() =>
    {
        // in unserem effekt greifen wir jetzt auf document.title zu, und geben den inhalt des states daran weiter.
        document.title = pageTitle; // unsere seite hat jetzt einen anderen titel.

        // Jetzt setzten wir ans ende noch ein leeres array für die abhängigkeiten. Dieses array hat die macht, zu entscheiden, wann der effekt ausgeführt wird, aber daurauf gehen wir nachher noch etwas detaillierter ein.

        // Der unmount, also der cleanup, der dafür da ist, zum beispiel verbindungen zu apis zu beenden, oder einen interval zu löschen, kann innerhalb von useEffect einfach ausgelöst werden, indem man eine anonyme funktion returnt. und dort die befehle ausführt, die nach jedem komponentenaufbau passieren sollen. Wir haben jetzt hier keinen sinnvollen einsatz dafür, also geben wir das event einfach in der konsole aus.
        return () =>
        {
            console.log("Hier wird aufgeräumt!");
        }

        // Was kann das array am ende von useEffect?
        // - Wenn wir das array einfügen. aber leer lassen, so wie wir es jetzt gemacht haben wird der effect nur einmal ausgeführt, wenn der komponent geladen wurde, ergo wird unser seitentitel nicht noch einmal verändert. (ComponentDidMount)
        // - Wenn wir das array weglassen, wird der effekt bei jedem neu-rendern ausgeführt, also wird unser seitentitel auch verändert, aber die ganze funktion wird ausgeführt,egal was mit dem kompenenten grad passiert, das ist natürlich nicht sonderlich performant (ComponentDidUpdate)
        // es gibt aber etwas, das uns in dieser situation hier hilft. Denn wenn wir das array mit einem oder mehreren spezifischen props oder states befüllen, wird der effekt jedes mal neu ausgeführt wenn sich der wert dieses attributes ändert. schieben wir also pageTitle in das array hinein, und schauen was passiert.
    }, [ pageTitle ]);

    // Wir erstellen eine event funktion mit der wir über einen button click den state pageTitle ändern wollen.
    const changePageTitle = (e) =>
    {
        // wenn wir dinge innerhlab des komponenten, aber ausserhalb des effects ändern sehen wir jetzt in der konsole durch unser console log im unmount, das der komponent tatsächlich neu aufgebaut wird.
        setPageTitle("Wir haben den namen der app verändert.");
    }

    return (
        <>
            Hello World!

            <br />
            {/* Wir erstellen einen button um den title zu ändern und übergeben ihn an eine funktion */}
            <button onClick={ changePageTitle }>Change page title</button>
        </>
    );
}

export default App;
