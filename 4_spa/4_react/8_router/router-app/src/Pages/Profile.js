import { useParams } from "react-router"; // Aus react-router importieren wir useParams;
import { useNavigate } from "react-router-dom";

const Profile = () =>
{
    const { id } = useParams(); // die benutzerId
    
    const navigate = useNavigate();

    return(
        <div>
            <h1>Profil von { id.toUpperCase() }</h1>

            <p>Hier sehen wir die Profildaten von { id }</p>

            <h1>FreundesListe</h1>

            <ul>
                <li>
                    <button onClick={ () => navigate('/user/hamid') }>Hamid</button>
                </li>
                <li>
                    <button onClick={ () => navigate('/user/saeed') }>Seed</button>
                </li>
                <li>
                    <button onClick={ () => navigate('/user/obadah') }>Obadah</button>
                </li>
                <li>
                    <button onClick={ () => navigate('/user/camila') }>Camila</button>
                </li>
            </ul>
        </div>
    )
}

export default Profile;