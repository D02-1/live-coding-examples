// Wir nehmen unseren counter und werfen ihn in einen Komponenten

// 1. Wir importieren useReducer(); von react.
import { useReducer } from 'react';

// 2. Wir erstellen die reducer funktion, diese kann auch ausserhalb des komponenten liegen.
const reducer = (state, action) =>
{
    switch (action.type)
    {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            throw new Error('Unknown Action!');
    }
}

// 3. hier schreiben wir unseren initfunktion und übergeben ihr eine value.
const initFunction = (initValue) =>
{
    // 4. Wir returnnen den übergeben wert, als wert des states:
    return { count: initValue };
}

// 5. Wir schreiben unseren komponenten und übergeben eine prop, die den startwert des counters angibt.
const Counter = ({ startValue }) =>
{
    // 6. Wir schreiben unseren reducer, und fügen die startValue als zweiten, und die init funktion als dritten wert an.
    const [ state, dispatch ] = useReducer(reducer, startValue, initFunction);

    // 7. jetzt können wir unseren komponenten genauso schreiben wie vorher:
    return(
        <div>
            <h1>{ state.count }</h1>
            <button onClick={ () => dispatch({ type: 'INCREMENT'}) }>+</button>
            <button onClick={ () => dispatch({ type: 'DECREMENT'}) }>-</button>
        </div>
    )
}

export default Counter;
