import React, { useState, useContext } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import { LoginStateContext } from './LoginStateContext';
import { CartContentContext } from './CartContentContext';

import Header from './Components/Header';

import Welcome from './Pages/Welcome';
import Shopping from './Pages/Shopping';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';

import './App.css';

function App()
{
    const [ loggedInState, setLoggedInState ] = useState(false);
    const [ cartContent, setCartContent ] = useState([]);

    const loggedInValue = { loggedInState, setLoggedInState };
    const cardContentValue = { cartContent, setCartContent };

    return (
        <CartContentContext.Provider value={ cardContentValue }>
            <LoginStateContext.Provider value={ loggedInValue }>
                <BrowserRouter>
                    <div className="App">
                        
                        <Header/>

                        <div className="Page">
                            <Routes>
                                <Route path="/" element={ <Welcome/> } />
                                <Route path="/shopping" element={ <Shopping/> } />
                                <Route path="/cart" element={ <Cart/> } />
                                <Route path="*" element={ <NotFound/> } />
                            </Routes>
                        </div>
                    </div>
                </BrowserRouter>
            </LoginStateContext.Provider>
        </CartContentContext.Provider>
    );
}

export default App;
