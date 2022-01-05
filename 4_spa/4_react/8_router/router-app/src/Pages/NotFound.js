import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const NotFound = () =>
{
    const navigate = useNavigate();

    const [ isLoggedIn, setIsLoggedIn ] = useState(true);

    return(
        <div>
            <h1>404</h1>

            <p>
                Seite nicht gefunden!
            </p>

            {/* Gehe zurück zur vorherigen Seite */}
            <button onClick={ () => navigate(-1) }>Zur vorherigen Seite</button>
            {/* Gehe mehrere seiten zurück */}
            {/* <button onClick={ () => navigate(-2) }>Gehe zur vorherigen-vorherigen Seite</button> */}

            {/* Das ganze geht auch in die andere richtung, mit 1, 2, use kommen wir seiten vorwärts. */}
            
            {/* Spezfische seite per useNavigate aufrufen */}
            <button onClick={ () => navigate('/contacts')}>Melden sie uns den Fehler</button>

            {
                isLoggedIn ?
                <button onClick={ () => navigate('/dashboard')}>Zurück zum dashboard</button>
                :
                <button onClick={ () => navigate('/')}>Zurück zur Startseite</button>
            }

        </div>
    )
}

export default NotFound;
