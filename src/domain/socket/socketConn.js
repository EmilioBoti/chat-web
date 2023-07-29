import { io } from "socket.io-client"
import { baseUrl } from "../../helpers/config"
import { formetDate } from "../../helpers/utils"

const PRIVATE_SMS = "private"
const MESSAGE_LISTENER = "message"

const socket = io(baseUrl, {
    autoConnect: false
})

export const setSocketConnection = (session) => {
    socket.auth = {
        token: session.token
    }
    socket.connect()

}

export const privateMessageEvent = (newMessage) => {
    socket.emit(PRIVATE_SMS, JSON.stringify({...newMessage}))
}

export const receiverNewMessage = (fun) => {
    socket.on(MESSAGE_LISTENER, (data) => {
        const newMessage = {
            ...data,
            times: formetDate(data.times)
        }
        fun(newMessage)
    })
}
