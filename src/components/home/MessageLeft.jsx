import "./style/message.css"

export function MessageLeft({ message, time }) {
    return (
        <div className="message-container">
            <div className="message-left">
                <p className="message">{message}</p>
                <small className="time-message-left time">{time}</small>
            </div>
        </div>
    )
}

export const TimeView = ({ sms }) => {
    return (
        <div key={sms.times} className="message-container">
            <div className="message-date-container">
                <small className="message-date">{sms.times}</small>
            </div>
        </div>
    )
}
