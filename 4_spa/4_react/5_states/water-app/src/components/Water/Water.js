import './Water.css';

// Unser komponent wird, wenn er initialisiert wird, die aktuelle temperatur auslesen und ausgeben ob das wasser flüssig oder fest ist.

// Zu allererst importieren wir React, und holen uns daraus das modul useState, das wir für unsere states benötigen.
import React, { useState } from 'react';

// useState ist ein hook, den wir innerhalb eines komponenten aufrufen können um einen state zu definieren. wenn die seite neu gerendert wird, bleibt der inhalt des states erhalten.

const Water = () =>
{
    // Wir schreiben jetzt 2 useState hooks, um unsere states zu deklarieren, einmal für die temperatur des wassers. und einemal für den zustand.
    const [ temperature, setTemperature ] = useState(10);
    const [ condition, setCondition ] = useState("flüssig");
    // Was haben wir hier geschrieben?
    // - Der erste wert in dem dekonstructor ist die variable, die den benötigten wert enthält.
    // - Der zweite wert ist eine funktion, die den veränderten wert übergibt
    // - Der parameter in useState ist der intialwert des states, also der variable.

    // Jetzt schreiben wir einen handler, für das ändern der temperatur:
    const handleTemperatureChange = () =>
    {
        // Hier schreiben wir jetzt die funktion setTemperature und übergeben ihr einen zufallswert.
        const newTemperature = Math.floor(Math.random() * 21) - 10;

        setTemperature(newTemperature);

        if(newTemperature > 0)
        {
            setCondition("flüssig");
        }
        else
        {
            setCondition("fest");
        }

        // setCondition(newTemperature > 0 ? "flüssig" : "fest");
    }

    return(
        <>
            {/* Wir erstellen eine div in der wir die informationen anzeigen */}
            <div>
                <p>Die aktuelle Temperatur: { temperature }°C</p>
                <p>Das Wasser ist: { condition }</p>
            </div>

            {/* Jetzt erstellen wir einen Button, der die temperaturfunktion ausführt: */}
            <button onClick={ handleTemperatureChange }>Zufallstemperatur</button>
        </>
    )
}

export default Water;
