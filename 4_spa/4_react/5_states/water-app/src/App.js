import { useState } from 'react';
import { Water, Message } from './components';

function App()
{
    const [ isVisible, setIsVisible ] = useState(true);

    return (
        <div className="App">
            <Water />

            <br />
            <br />

            <Message 
              color="tomato"
              initVisibility={ isVisible }>
              Hallo Welt!
            </Message>
        </div>
    );
}

export default App;
