import './App.css';

// const <component name> = () => (jsx);

function App()
{
    const userList =
    [
        {
            firstName: "Max",
            lastName: "Mustermann",
            age: 17 
        },
        {
            firstName: "James",
            lastName: "Bond",
            age: 47
        },
        {
            firstName: "Michael",
            lastName: "Knight",
            age: 35
        }
    ];
    const isValid = false;
    const isAdult = (age) =>
    {
        return age > 18;
    }

    return (
        // <></> oder <React.Fragment></React.Fragment>
        <>
            <h2>JavaScript in JSX nutzen</h2>

            <p>
                Wenn wir JavaScript in JSX nutzen wollen, schreiben wir es in geschwungene klammern, wichtig ist, das wir auf semikolons verzichten:
            </p>

            <p>Die rückgabe wird immer als string ausgegeben.</p>

            { 5 + 7 }

            <p>{ `${ userList[0].firstName } ${ userList[0].lastName }` } is { userList[0].age } years old</p>

            <p>{ `${ userList[0].firstName } ${ userList[0].lastName }` } is { isAdult(userList[0].age) ? "old enough" : "not old enough" } </p>

            <hr/>

            <h2>For in JSX = Map</h2>

            <p>Wenn wir durch etwas loopen wollen, und den inhalt ausgeben wollen, nutzen wir map. Wir geben jedem element einen key, damit jeder eintrag eine definitive nummer hat:</p>

            <ul>
                {
                    userList.map((user, i) =>
                    {
                        return <li key={ i }>{`${ user.firstName } ${ user.lastName }`}</li>
                    })
                }
            </ul>

            <hr/>

            <h2>Kommentare in JSX</h2>

            <p>
                Kommentare werden immer in brackets eingeleitet, und dann im multiline oder jsdoc style geschrieben:
            </p>

            {/* Ich bin nur eine zeile lang */}

            {/**
             * 
             * JSDoc style
             * 
             */}

            {/*
                ich 
                bin
                mehrere
                zeilen
                lang
            */}

            <hr/>

            <h2>"Conditional Rendering" oder "Zeige dinge nur, wenn du darfst!"</h2>

            <p>Conditional Rendering funktioniert in react genau wie in der Dom, wir sagen "WENN X ZUTRIFFT", zeige etwas an:</p>

            <h3>Markiere Volljährige mitglieder:</h3>

            <ul>
                {
                    userList.map((user, i) =>
                    {
                        return (
                            <li 
                                key={ i } 
                                style={{ 
                                    width: 200, 
                                    color: i === 2 ? "red" : "blue", 
                                    backgroundColor: isAdult(user.age) ? "lime" : "tomato" 
                                }}
                            >
                                { `${ i }: ${ user.firstName } ${ user.lastName }` }
                            </li>
                        )
                    })
                }
            </ul>

            <p>
                Wir können anhand von ternarys auch die ansicht ganzer html elemente steuern:
            </p>

            {
                isValid ? 
                (
                    <div style={{ backgroundColor: "lime", width: 200, padding: 20 }}>
                        <p>isValid is true</p>
                    </div>
                )
                :
                (
                    <div style={{ backgroundColor: "tomato", width: 200, padding: 20 }}>
                        <p>isValid is false</p>
                    </div>
                )
            }

            <hr/>

            <p>Wichtig ist, das wir die unterschiede der klammern in jsx bedenken</p>

            <ul>
                <li>() = html elemente innerhalb von JavaScript code returnen</li>
                <li>{ "{}" } = JavaScript code</li>
            </ul>
        </>
    );
}

export default App;
