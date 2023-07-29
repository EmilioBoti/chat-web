import { v4 as geneId } from "uuid"
import dayjs from "dayjs"

import { requestUserChats, requestChatMessage } from "../../services/chatService/chatService"
import { getSession } from "../../helpers/session"
import { privateMessageEvent, receiverNewMessage } from "../socket/socketConn"
import { formetDate } from "../../helpers/utils"


let friends = []
const userLoged = getSession()


export const getChats = async () => {
    const users = await requestUserChats(userLoged.token)
    friends = users.body
    friends.forEach(user => {
        user.times = formetDate(new Date(user.times))
    })
    return friends
}

export const getMessages = async (roomId, signal) => {
    const user = findUser(roomId)
    const messages = await requestChatMessage(userLoged.token, signal, roomId)

    let oldDay
    let month
    let year

    const listMessages = []

    messages.forEach(elem => {
        const date = new Date(elem.times)
        const day = date.getDay()

        if (oldDay !== day) {
            oldDay = day
            listMessages.push({
                isTime: true,
                times: formatDateMessage(date)
            })
        }
        elem.times = formetDate(elem.times)
        elem.isTime = false
        listMessages.push(elem)
    })
    console.log(listMessages)
    return {
        ...user,
        listMessages
    }
}


export const listenerNewMessage = (message) => {
    friends.forEach(user => {
        if (user.id === message.fromU || user.id === message.toU) {
            user.lastMessage = message.message
        }
    })
    return friends
}


export const sendingMessage = (text, roomId) => {
    const user = findUser(roomId)

    const message = {
        fromU: userLoged.id,
        message: text,
        messageId: geneId(),
        toU: user.id,
        userName: userLoged.username,
        roomId
    }
    return message
}

export const senderMessange = (newMessage) => {
    privateMessageEvent(newMessage)
}

export const newMessageListener = (fun) => {
    receiverNewMessage(fun)
}

const findUser = (roomId) => {
    return friends.find(user => user.roomId === roomId)
}

/**
 * it fun does not work yet
 * @param {*} newMessage 
 * @returns 
 */
export const formatDateMessage = (date) => {
    const d = dayjs(date).format("D/MM/YYYY")
    return d
}

export const isSameRoom = (roomId, roomId2) => {
    return roomId === roomId2
} 
