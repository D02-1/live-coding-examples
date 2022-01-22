import React, { useContext } from 'react';

import { CartContentContext } from './../CartContentContext';
import { LoginStateContext } from './../LoginStateContext';

const randomId = () =>
{
    return Math.random().toString(36).replace('0.', 'item_');
}

const Shopping = () =>
{
    const { cartContent, setCartContent } = useContext(CartContentContext);
    const { loggedInState } = useContext(LoginStateContext);

    const articles =
    [
        {
            title: "Flowers",
            description: "A beautiful flower bouquet",
            price: 10.99
        },
        {
            title: "Thank you Card",
            description: "A Thank you card, with a personalized drawing",
            price: 5
        },
        {
            title: "Collection of Chocolate candy",
            description: "A wonderful, tasty collection of chocolate candy",
            price: 15
        },
        {
            title: "Bag of Candy",
            description: "A colorful bag of candy",
            price: 3.50
        }
    ];

    return(
        <div>
            <h1>Shopping Page</h1>

            <ul>
                {
                    articles.map((article, i) =>
                    {
                        return (
                            <li key={ i }>
                                <h2>{ article.title }</h2>
                                <p>{ article.description }</p>
                                <p>Price:&nbsp;
                                    <b>${ article.price }</b>
                                </p>
                                {
                                    loggedInState &&
                                    <button
                                        onClick={ () => setCartContent([...cartContent, { id: randomId(), ...article} ]) }
                                    >
                                        Add to cart
                                    </button>
                                }
                            </li>
                        )
                    })
                }
            </ul>

            {/* {
                cartContent.length > 0 &&
                cartContent.map(item =>
                {
                    return <p key={ item.id }>{ item.title }</p>
                })
            } */}
        </div>
    )
}

export default Shopping;
