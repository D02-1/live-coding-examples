// Wir importieren unseren komponenten
import Counter from './Components/Counter';

import './App.css';

function App()
{
    return (
        <div className="App">
            {/* Danach können wir unseren komponenten der app hinzufügen und einen startwert für den Counter angeben. */}
            <Counter startValue={ 5 }/>
        </div>
    );
}

export default App;
