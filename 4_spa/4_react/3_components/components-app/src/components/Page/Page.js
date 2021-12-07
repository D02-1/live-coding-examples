import { Message } from './components';

import './Page.css';

const Page = () =>
{
    function handleClick(event)
    {
        console.log("Ich wurde angeklickt!");
    }

    return(
        <div className="Page">
            <button onClick={ handleClick }>
                Sag etwas in der konsole...
            </button>

            <Message isVisible={ true } state="success">
                Hallo Ich bin da!
            </Message>
            <Message isVisible={ true } state="failure"/>
            <Message isVisible={ false } state="success">
                ABCDE
            </Message>
            <Message isVisible={ true } state="success">
                Diese Klasse ist toll
            </Message>
            <Message isVisible={ false } state="failure">
                Ich bin nicht da
            </Message>
        </div>
    )
}

export default Page;