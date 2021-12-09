import './Paragraph.css';

//                 wenn ich hier props hin schreibe, wird das props objekt übergeben.
const Paragraph = (props) =>
{

    console.log(props);

    return(
        <div className="Paragraph">
            {/* props.children sorgt dafür das wir in ein komponent-element, innerhalb von JSX html übergeben können */}
            <p>
                {
                    // Wir können auf jegliche übergebenen attribute in props zugreifen:
                    props.hasArrow && 
                    <span style={{ color: props.color }}>
                        =&gt;
                    </span>
                }
                { props.children }
            </p>
        </div>
    );
}

export default Paragraph;
