import './Circle.css';

// Mit hilfe des deconstructors können wir werte auch direkt aus dem props objekt ziehen.
const Circle = ({ color, showInnerCircle }) =>
{
    // Die werte wären entsprechend: 
    // props.color;
    // props.showInnerCircle;

    return(
        <div className="Circle" style={{ backgroundColor: "tomato" }}>
            {/* color: color; */}
            {
                showInnerCircle &&
                <div className="innerCircle" style={{ color }}>Hallo</div>
            }                        
        </div>
    )
}

export default Circle
