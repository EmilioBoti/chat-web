import { useState, useEffect } from "react"

import { ChatActionBar } from "./ChatActionBar"
import { MessageContainer } from "./MessageContainer"

import {
    senderMessange,
    sendingMessage,
    getMessages,
    newMessageListener,
    isSameRoom,
} from "../../domain/chatRoom/chatLogic"

import { Box, Container, Grid } from "@mui/material"
import { ChatInput } from "./ChatInput"

let roomIdentifier = ""

const user = {
    roomId: "",
    id: "",
    name: "",
    email: "",
    times: "",
    image_url: "",
    lastMessage: "",
    listMessages: [],
    public_id: "",
    toUser: "",
}

function isTextNotEmpty(text) {
    return text !== "" || text !== " "
}

export function ChatRoom({ roomSelected }) {
    const [chatRoomData, setChatRoomData] = useState(user)
    const [loader, setLoader] = useState(false)

    /**
     *  event listener of new messages
     */
    newMessageListener((newMessage) => {
        if (isSameRoom(roomIdentifier, newMessage.roomId)) {
            const newRoom = {
                ...chatRoomData,
                listMessages: [...chatRoomData.listMessages, newMessage],
            }
            setChatRoomData(newRoom)
        }
    })

    useEffect(() => {
        roomIdentifier = roomSelected
        let isMounted = true

        getMessages(roomSelected)
            .then((data) => {
                if (isMounted) {
                    setChatRoomData(data)
                }
            })
            .catch((err) => console.error(err))

        return () => {
            isMounted = false
        }
    }, [roomSelected])

    return (
        <Box>
            <ChatActionBar
                name={chatRoomData.name}
                image={chatRoomData.image_url}
                isOnline={true}
            />
            <MessageContainer data={chatRoomData} />
            <ChatInput
                sendMessage={(text) => {
                    if (isTextNotEmpty(text)) {
                        const newMessage = sendingMessage(
                            text,
                            chatRoomData.roomId
                        )
                        senderMessange(newMessage)
                    }
                }}
            />
        </Box>
    )
}
