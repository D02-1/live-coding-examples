import { React } from 'react';
import { Link } from 'react-router-dom'; 

const Welcome = () =>
{
    return(
        <div>
            <h1>Welcome To our Shop!</h1>

            <p>Have fun shopping around!</p>

            <Link to="/shopping">Check out our products</Link>
        </div>
    )
}

export default Welcome;
