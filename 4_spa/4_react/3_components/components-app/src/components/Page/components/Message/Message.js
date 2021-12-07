import './Message.css';

const Message = (props) =>
{
    if(!props.isVisible)
    {
        return null;
    }
    else
    {
        return (
            //              "Message failure"
            <div className={`Message ${ props.state }`}>
                <p>
                    { props.children ? props.children : "NO MESSAGE" }
                </p>
            </div>
        )
    }
}

export default Message;
