// Bauen wir ein einfaches react konstrukt mit einem Counter

// 1. Wir importieren useReducer von react
import { useReducer } from "react";

import './App.css';

function App()
{
    // 2. Wir erstellen einen initialwert für unsere states, dafür nutzen wir ein objekt namens "initialState{}"
    // hier stände jetzt sonst: const [ count, setCount ] = useState(0);
    const initialState =
    {
        count: 0
    }

    // 3. Wir bauen eine reducer funktion, die den alten state, und die aktion übergeben bekommt.
            // alter state, aktion die ausgeführt wird
    const reducer = (state, action) =>
    {
        // 4. Innerhalb des reducers gibt es einen switch, der anhand des action types, den wir hier per string auswerten, eine entscheidung trifft.
        switch (action.type)
        {
            // incrementieren wir, wird der count höher gesetzt
            case 'INCREMENT':
                return { count: state.count + 1 };
            // decrementieren wir, wird der count niedriger gesetzt
            case 'DECREMENT':
                return { count: state.count - 1 };
            // typisch für einen switch, sollte es eine möglichkeit geben, zu sehen, falls wir etwas falsches übergeben haben.
            default:
                throw new Error('Unknown Action');
        }
    }

    // 5. Wir erstellen einen useReducer() hook, in den wir reducer als state, und den initialState als sogenannten dispatcher einfügen, also als informations-sender.
    const [ state, dispatch ] = useReducer(reducer, initialState);

    return (
        <div className="App">
            {/* 6. in unserer app könenn wir den aktuellen state ausgeben */}
            <h1>
                { state.count }
            </h1>
            {/* 7. Die beiden folgenden buttons senden den action type an das dispatcher event, und führen dadurch den switch innerhalb der reducer funktion aus */}
            <button onClick={ () => dispatch({ type: 'INCREMENT' }) }>+</button>
            <button onClick={ () => dispatch({ type: 'DECREMENT' }) }>-</button>
        </div>
    );
}

export default App;
