import { getSession, removeToken } from "../../helpers/session"
import { formatName } from "../../helpers/utils"
import { setSocketConnection, receiverNewMessage } from "../../domain/socket/socketConn"
import { Direction, navigateTo } from "../router/routers"

const session = getSession()


export const logoutSession = () => {
    removeToken()               
    navigateTo(Direction.LOGIN)
}

export const connectSokcet = () => {
    setSocketConnection(session)
}

export const newMessageEvent = (fun) => {
    receiverNewMessage(fun)
}

export const getUserName = () => {
    return formatName(session.username)
}

export const getSocketConn = () => {
    return socket
}