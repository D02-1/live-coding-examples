import React, { useState, useEffect } from 'react';

import Item from './Components/Item';
import List from './Components/List';
import Loader from './Components/Loader';

import './App.css';

function App()
{
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(null); 

    const getData = () =>
    {
        setIsLoading(true); // auf true, weil wir beim laden des komponenten sowieso die daten laden werden.

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json =>
        {
            console.log(json);
            setData(json);
            setIsLoading(false);
        });
    }

    useEffect(() =>
    {
        getData();
    }, []); // Wird am anfang ausgeführt, wenn der komponent geladen wird, damit wir, wenn diese aktion abgeschlossen wurde, alle benötigten daten sehen.

    return (
        <div className="App">
            <h1>Unsere gesuchten daten...</h1>

            <button onClick={ () => getData() }>Lade die Daten</button>

            {
                !isLoading ? // ich nutze den umgedrehten boolean um den WICHTIGEREN inhalt oben zu schreiben.
                (
                    <List>
                        {
                            data.map(item => // oder wir fügen noch "i" hinzu, falls die daten keine eigene ID haben.
                            {
                                return <Item item={ item } />
                            })
                        }
                    </List>
                )
                :
                (
                    <Loader />
                )
            } 
        </div>
    );
}

export default App;
