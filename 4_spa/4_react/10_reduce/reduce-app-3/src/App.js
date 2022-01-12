import { useReducer } from 'react';

function App()
{
    /*
        In programmiersprachen wie C# oder Java ist es eine gängige praxis action types und andere typensammlungen mit sogenannten ENUMS (Enumerable Types) zu definieren. Die variablennamen sind meist zur identifikation einer bestimmten sortierung angelegt. So könnte ein enum zum beispiel aussehen:

        const MessageType =
        {
            INFO,
            WARNING,
            ERROR
        }

        Würden wir code haben, der eine message erstellen soll, und wir ihr den wert type: MessageType.INFO geben, könnten wir innerhalb eines switches dann dort den typ vergleichen, und entscheiden was bei deiner message des types INFO passieren soll.

        Da es in JavaScript den datentyp ENUM nicht gibt, können wir anstelle dessen obejkte nutzen, die wir ähnlich aufbauen, u in unserem switch den string-wert des ausgewählten types zu vergleichen. das gibt uns den vorteil das wir uns beim wiederholen dr string eingabe nicht verschreiben und wir uns nicht wiederholen müssen.
    */

    const actionType =
    {
        COLOR_CHANGE: "colorChange",
        PET_CHANGE: "petChange"
    }

    const reducer = (state, action) =>
    {
        switch (action.type) {
            case actionType.COLOR_CHANGE:
                // Die anderen states mit einbeziehen.
                return { ...state, color: action.value }
            case actionType.PET_CHANGE:
                return { ...state, pet: action.value }
            default:
                console.error("ERROR: Option not availible")
        }
    }

    // Wir schaffen uns für unsere beiden states initialwerte
    const initialState =
    {
        color: 'Schwarz',
        pet: 'Katze'
    }

    // Wir erstellen den reducer
    const [ state, dispatch ] = useReducer(reducer, initialState);

    // Wir erstellen zwwei objekte mit werten zur auswahl für unsere select-boxen
    // eine auswahl an farben
    const color =
    {
        black: "Schwarz",
        blue: "Blau",
        yellow: "Gelb"
    }

    // eine auswahl an tieren
    const pet =
    {
        cat: 'Katze',
        dog: 'Hund',
        mouse: 'Maus'
    }

    return (
        <div className="App">
            <h1>Wähle eine Farbe und ein Tier:</h1>
            <br />
            {/* In den select boxen nutzen wir den initialstate von color und pet als value */}
            <select
                value={ state.color }
                onChange={ (e) => dispatch({ type: actionType.COLOR_CHANGE, value: e.target.value })}
            >
                {/* In den select options nutzen wir sowohl als value, wie auch als beschreibung den value der jeweiligen auswahl */}
                <option value={ color.black }>{ color.black }</option>
                <option value={ color.blue }>{ color.blue }</option>
                <option value={ color.yellow }>{ color.yellow }</option>
            </select>
            <br />
            <select
                value={ state.pet }
                onChange={ (e) => dispatch({ type: actionType.PET_CHANGE, value: e.target.value }) }
            >
                <option value={ pet.cat }>{ pet.cat }</option>
                <option value={ pet.dog }>{ pet.dog }</option>
                <option value={ pet.mouse }>{ pet.mouse }</option>
            </select>
            <br />
            {/* am ende geben wir unsere aktuelle auswahl aus: */}
            <p>Aktuelle auswahl</p>
            <ul>
                <li>Farbe: { state.color }</li>
                <li>Tier: { state.pet }</li>
            </ul>
        </div>
    );
}

export default App;
