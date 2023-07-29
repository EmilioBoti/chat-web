import "./style/message.css"

export function MessageRight({ message, time }) {
    return (
        <div className="message-container">
            <div className="message-right">
                <p className="message">{message}</p>
                <small className="time-message-right time">{time}</small>
            </div>
        </div>
    )
}
