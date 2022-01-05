import React, { useState } from 'react';
// Wir installieren react-router-dom per befehl: "npm install react-router-dom".
import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom';

import './App.css';

import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Contacts from './Pages/Contacts';
import NotFound from './Pages/NotFound';
import Profile from './Pages/Profile';

function App()
{
    const [ isLoggedIn, setIsLoggedIn ] = useState(true);

    return (
        <div className="App">
            
            {/* <header>
                <h3>Normale navigation</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/contacts">Kontakt</a></li>
                    <li><a href="/error">Fehler</a></li>
                </ul>
            </header> */}

            {/* Wir rufen den router auf, indem wir das element in unserem code platzieren. */}
            <BrowserRouter>
                {/* Link MUSS innerhalb des BrowserRouters benutzt werden und sorgt dafür, das die seite NICHT neu gerendert wird, wenn ein link angeklickt wird, sondern NUR der inhalt der ersetzt wird. */}
                {/* <header>
                    <h3>Router Link Navigation</h3>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/contacts">Kontakt</Link>
                        </li>
                        <li>
                            <Link to="/error">Fehler</Link>
                        </li>
                    </ul>
                </header> */}

                {/* NavLink kann durch das attribut activeClassName steuern, wie der link aussieht,wenn der browser gerade auf dem spezifischen pfad ist. */}
                {/* die standard-klasse für den sichtbaren komponenten, der im menu angezeigt wird, ist .active */}
                <header>
                    <h3>Router NavLink Navigation</h3>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts">Kontakt</NavLink>
                        </li>
                        <li className="right">
                            {
                                isLoggedIn ?
                                <a onClick={ () => setIsLoggedIn(false)}>Logout</a>
                                :
                                <a onClick={ () => setIsLoggedIn(true)}>Login</a>
                            }
                        </li>
                    </ul>
                </header>

                <div className="page">
                    {/* Wir erstellen eine ansammlung von Routen. */}
                    <Routes>
                        {/*
                            path: der pfad zur adresse des komponenten
                            element: der komponent den wir anzeigen wollen
                            exact: spezifiziert das NUR an diesem pfad der komponent angezeigt wird
                        */}
                        <Route path="/" element={ 
                            isLoggedIn ?
                            <Navigate to="/user/IchBinEinUser"/>
                            :
                            <Home />
                        } />
                        {/* :id ist der param den wir auslesen wollen, aus /user/:id wird also /user/USERNAME und auf der seite Profile können wir :id als id aus useParams auslesen. */}

                        {/* Wichtig ist, den doppelpunkt zu setzen, damit der router weiss, das es sich um einen parameter handelt */}

                        {/* 
                            mehrere parameter in produktionslogik:
                            /kategorien/:kategorie/produkt/:produktId
                         */}
                        <Route path="/user/:id" element={ <Profile/> } />

                        {/* Wir können auch props an Komponenten innerhalb einer route übergeben */}
                        <Route path="/blog" element={ <Blog active={ true } /> } />
                        <Route path="/contacts" element={ <Contacts />} />
                        <Route path="*" element={ <NotFound /> } />
                    </Routes>
                </div>
                
            </BrowserRouter>
        </div>
    );
}

export default App;
