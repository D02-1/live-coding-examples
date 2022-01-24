import React, { useContext } from 'react';

import { CartContentContext } from '../CartContentContext';

const Cart = () =>
{
    const { cartContent, setCartContent } = useContext(CartContentContext);

    const getTotal = () =>
    {
        let total = 0;

        cartContent.forEach(item =>
        {
            total += item.price * item.vat;
        });

        return total.toFixed(2);
    }

    const deleteItem = (id) =>
    {
        const leftOverItems = cartContent.filter(item => item.id !== id);
        
        setCartContent(leftOverItems);
    }

    return(
        <div>
            <h1>Shopping Cart</h1>

            <p>You selected these beautiful items:</p>

            {
                cartContent.length === 0 ?
                (
                    <h3>Your shopping cart is empty :(</h3>
                )
                :
                (
                    <div>
                        <ul>
                            {
                                cartContent.map((item, i) =>
                                {
                                    return (
                                        <li key={ i }>
                                            <button onClick={ () => deleteItem(item.id) }>x</button>&nbsp;
                                            { item.title } - ${ ((item.price) * item.vat).toFixed(2) }
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <hr />

                        <i>Total: ${ getTotal() } (including shipping and VAT!)</i>
                    </div>
                )
            }

        </div>
    )
}

export default Cart;
