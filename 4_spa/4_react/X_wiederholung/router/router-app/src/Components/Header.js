import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { LoginStateContext } from '../LoginStateContext';
import { CartContentContext } from '../CartContentContext';

const Header = () =>
{
    const { loggedInState, setLoggedInState } = useContext(LoginStateContext);
    const { cartContent } = useContext(CartContentContext);

    const navigate = useNavigate();

    const handleLogOut = () =>
    {
        setLoggedInState(false);
        navigate("/");
    }

    const handleLogIn = () =>
    {
        setLoggedInState(true);
        navigate("/shopping")
    }

    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/shopping">Our Products</NavLink>
                </li>
                <li className="right">
                {
                    loggedInState ?
                    (
                        <button
                            onClick={ () => handleLogOut() }
                        >
                            Logout
                        </button>
                    )
                    :
                    (
                        <button
                            onClick={ () => handleLogIn() }
                        >
                            Login
                        </button>
                    )
                }
                </li>
                {
                    loggedInState &&
                    <li className='right'>
                        <NavLink to="/cart">
                            Your Shopping Cart { cartContent.length > 0 && `(${ cartContent.length })` }
                        </NavLink>
                    </li>
                }
            </ul>
        </nav>
    )
}

export default Header;
