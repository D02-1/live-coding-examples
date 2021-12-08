import './Box.css';

import {Paragraph} from './../'

const Box = (props) =>
{
    return(
        <div className="Box">
            <Paragraph hasArrow={ true } color={ props.color }>
                { props.children }
            </Paragraph>
        </div>
    )
}

export default Box;
