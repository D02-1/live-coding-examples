import { useReducer } from 'react';

import './App.css';

function App()
{
    const authors =
    [
        {
            name: "Arthur Conan Doyle", 
            alive: false,
            books: 22 // nur bücher, nicht kurzgeschichten...
        },
        {
            name: "Edgar Allan Poe",
            alive: false,
            books: 2
        },
        {
            name: "George R. R. Martin",
            alive: true,
            books: 12
        },
        {
            name: "H. P. Lovecraft",
            alive: false,
            books: 7
        },
        {
            name: "Ian Flemming",
            alive: false,
            books: 15
        }
    ];

    const reducer = (authors, action) =>
    {
        const selectedAuthors = [];

        // if(action.type === "ALIVE")
        // {
        //     authors.forEach(author =>
        //     {
        //         if(author.alive === true)
        //         {
        //             selectedAuthors.push(author);
        //         }
        //     });
        // }

        // if(action.type === "DEAD")
        // {
        //     authors.forEach(author =>
        //     {
        //         if(author.alive === false)
        //         {
        //             selectedAuthors.push(author)
        //         }
        //     });
        // }

        authors.forEach(author =>
        {
            // if(action.type === "ALIVE" && author.alive === true)
            // {
            //     selectedAuthors.push(author);
            // }
            // if(action.type === "DEAD" && author.alive === false)
            // {
            //     selectedAuthors.push(author);
            // }

            if(
                (action.type === "ALIVE" && author.alive) || 
                (action.type === "DEAD" && !author.alive)
            )
            {
                selectedAuthors.push(author);
            }
        });

        return selectedAuthors;
    }

    const [ state, dispatch ] = useReducer(reducer, authors);

    return (
        <div className="App">

            <h1>List of Authors</h1>

            <button onClick={ () => dispatch({ type: "ALIVE" }) }>Filter living Authors</button>
            <button onClick={ () => dispatch({ type: "DEAD" }) }>Filter dead Authors</button>

            <hr />

            {
                state.map((author, i) =>
                {
                    return <div key={ i }>{ author.name }</div>
                })
            }

        </div>
    );
}

export default App;
