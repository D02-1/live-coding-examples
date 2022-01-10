import { useState } from 'react';
import { Books, CurrencySwitcher } from "./Components";

// nachdem wir die App vorbeiretet haben, können wir unseren kontext importieren.
import { CurrencyContext } from "./CurrencyContext";

// Wir erstellen ein array mit büchern, dessen informationen und preise wir anzeigen wollen.
const bookArray = 
[
    {
        id: 1,
        title: 'The Hound of the Baskervilles',
        topic: 'Sherlock Holmes',
        author: 'A. C. Doyle',
        price: 14.99,
        cover: 'https://images-eu.ssl-images-amazon.com/images/I/515zykn7ZmL._SY264_BO1,204,203,200_QL40_ML2_.jpg'
    },
    {
        id: 2,
        title: 'Casino Royale',
        topic: 'James Bond',
        author: 'Ian Flemming',
        price: 9.99,
        cover: 'https://images-eu.ssl-images-amazon.com/images/I/41QW2wQzV0L._SY264_BO1,204,203,200_QL40_ML2_.jpg'
    }
]

const App = () =>
{
    // nachdem wir gelernt haben wie wir statische werte anzeigen (unstateful), wollen wir nun sehen das wir den context auch in echtzeit, dynamisch (stateful) ändern können. Wir können so zum beispiel auf einem button click die genutze currency ändern. Dafür müssen wir nur einen state einbinden, den wir als wert übergeben können.
    const [ currency, setCurrency ] = useState({ type: '€', conversion: 1 });

    // wir bauen getter uns setter in ein objekt ein, das wir dem provider übergeben können.
    const value = { currency, setCurrency };

    return (
        // Nachdem wir unseren kontext importiert haben, erstellen wir einen Provider, in den wir unsere komplette App stecken, dies sorgt dafür, das wir innerhalb des providers jetzt überall auf den wert zugreifen können. Bei value geben wir jetzt unseren anfangswert an, und können diesen jetzt in jedem anderen komponenten nutzen.
        <CurrencyContext.Provider value={ value }>

            {/* Ich habe einen komponenten erstellen, um die buttons aus der App.js auszulagern. */}
            <CurrencySwitcher />
            
            <div className="App">
                <Books list={ bookArray } />
            </div>
        </CurrencyContext.Provider>
    );
}

export default App;
