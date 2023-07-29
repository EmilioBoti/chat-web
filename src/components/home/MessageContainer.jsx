import { useEffect, useRef } from "react"

import { MessageLeft, TimeView } from "./MessageLeft"
import { MessageRight } from "./MessageRight"

export function MessageContainer({ data }) {
    const messageContainer = useRef(null)

    useEffect(() => {
        messageContainer.current.scrollTop =
            messageContainer.current.scrollHeight
    }, [data.listMessages])

    return (
        <>
            <div
                className="chat-message"
                ref={messageContainer}
                id="message-container"
            >
                {data.listMessages?.map((sms, index) => {
                    return viewMessage(data, sms, index)
                })}
            </div>
        </>
    )
}

const viewMessage = (data, sms, index) => {

    if(sms.isTime === true) {
        return (
            <TimeView sms={sms}/>
        )
    }

    if (data.toUser === sms.fromU) {
        return (
            <MessageRight key={index} message={sms.message} time={sms.times} />
        )
    } else {
        return (
            <MessageLeft key={index} message={sms.message} time={sms.times} />
        )
    }
}
