import React, { useState } from 'react';

const Message = ({ color, initVisibility, children }) => 
{
    const visibilityState = initVisibility;

    const [ visible, setVisible ] = useState(visibilityState);

    const handleVisibility = () =>
    {
        setVisible(false);
    }

    return(
        <div
            style={{
                backgroundColor: `${ color || "cyan" }`,
                border: "1px solid black",
                width: "200px",
                display: `${ visible ? "block" : "none" }`,
                margin: "0 auto"
            }}
        >
            <div>
                { children }
            </div>
            <button onClick={ handleVisibility }>Schließen</button>
        </div>
    )
}

export default Message;
