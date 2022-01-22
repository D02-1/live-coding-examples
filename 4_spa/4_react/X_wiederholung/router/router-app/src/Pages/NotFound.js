import { React } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () =>
{
    const navigate = useNavigate();

    return(
        <div>
            <h1>404</h1>
            <p>Not Found!</p>

            <button onClick={ () => navigate(-1) }>Go Back</button>
        </div>
    )
}

export default NotFound;
