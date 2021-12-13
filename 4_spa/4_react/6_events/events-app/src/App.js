// 1. Wir importieren useState von React
import React, { useState } from 'react';

// Mehr informationen zu events in react: https://de.reactjs.org/docs/events.html

// 1. Wir ändern den app komponenten um.
// 2. Wir können parameter an den event-handler übergeben, dafür müssen wir ihn mit einer anonymen funktion aufrufen.
// 3. Wir können auch andere events, wie onchange nutzen, in dem wir übergeben wollen, was momentan geschrieben wird.

function App()
{
    // 1. Wir erstellen einen state hook, den ich auf false setze
    const [ isToggled, setIsToggled ] = useState(false);

    // 2. Wir erstellen einen weiteren hook, nennen wir in book.
    const [ book, setBook ] = useState("Harry Potter");

    // 3. wir erstellen einen state, in dem wir den aktuellen text speichern wollen, und initialisieren ihn mit einem leeren string
    const [ textValue, setTextValue ] = useState("");

    // 1. In react rufen wir addEventListener nie selber auf, sondern erstellen eine funktion, der wir das event übergeben. So stelllen wir eine funktion zur verfügung, die ein event ausführen kann.
    const handleClick = (e) =>
    {
        // .preventDefault() sorgt dafür das ein element nicht seine standardmäßige reaktion  ausführt, wenn es geklickt wird.
        e.preventDefault();

        // 1. es gibt sogar ein attribut, mit der wir prüfen können, ob ein event mit .preventDefault(); bestückt wurde.
        console.log(e.defaultPrevented);

        // 1. wir erstellen einen toggle, um unseren state umzuschalten.
        setIsToggled(!isToggled);
    }

    // 2. Wir erstellen eine weitere event-funktion, in der wir den wert von book ändern, diesmal übergeben wir einen zweiten parameter.
    const handleBookChange = (e, bookName) =>
    {
        e.preventDefault();

        // 2. Wir können das aktuelle event-target ausgeben.
        console.log(e.currentTarget);

        // 2. Wir geben bookName an setBook weiter.
        setBook(bookName);
    }

    // 3. Wir erstellen eine event funktion, in der wir den aktuellen wert des inputs an den state übergeben.
    const handleTextChange = (e) =>
    {
        setTextValue(e.target.value);
    }

    return (
        <div className="App" style={{ textAlign: "center" }}>
            <h1>Events in React</h1>

            <h2>1. onClick</h2>
            <p style={{ fontWeight: "bold" }}>
                { isToggled ? "AN" : "AUS" }
            </p>

            {/* 1. Wir erstellen ein klickbares element, in dem wir handleClick übergeben. */}
            {/* onClick={ handleClick } anstelle von onclick="handleClick()" */}
            <a href="https://google.de" onClick={ handleClick }>
                Klick!
            </a>

            <h2>2. onClick mit parameterübergabe</h2>

            {/* 2. Wir erstellen ein text-Element, das den buchnamen ausgibt. */}
            <p>Das aktuelle Buch ist <b>{ book }</b></p>

            {/* 2. Wir erstellen ein weiteres klickbares element, diesmal übergeben wir einen wert mit einer anonymen funktion */}
            <a href="#" onClick={ (e) => handleBookChange(e, "Casino Royale") }>
                Anderes Buch anzeigen
            </a>

            <h2>3. onChange</h2>
            {/* 3. Wir erstellen ein input element das wir mit einem onChange event ausstatten */}
            <input type="text" onChange={ handleTextChange } />

            {/* 3. wir erstellen ein p element, in dem wir den aktuellen text ausgeben. */}
            <p>Der eingegebene Text ist: <b>{ textValue }</b></p>

            {/* 3. da wir den wert des text-inputs als state speichern, können wir den value auch an andere input felder als wert übergeben. */}
            <p>
            Wir kopieren den text eines inputFeldes:
            </p>
            <input type="text" readOnly value={ textValue } />
        </div>
    );
}

export default App;
