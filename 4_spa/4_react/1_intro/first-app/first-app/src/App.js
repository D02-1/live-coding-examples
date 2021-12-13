import logo from './logo.svg';
import './App.css';

const isLoggedIn = false;

function App()
{
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                { 
                    // Wichtig ist, das wir code, in JSX in brackets schreiben.
                    // If/Else können wir hier nur als ternary nutzen
                    isLoggedIn ?
                    <p>
                        Wir sind Eingeloggt
                    </p>
                    :
                    <p>
                        Wir sind nicht Eingeloggt
                    </p>
                }

                {
                    isLoggedIn && 
                    <i>Hallo Welt</i>
                }

            </header>
        </div>
    );
}

export default App;
