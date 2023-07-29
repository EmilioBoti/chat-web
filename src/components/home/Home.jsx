import { useState, useEffect } from "react"
import { useNavigate, Outlet } from "react-router-dom"
import { Box, Container } from "@mui/material"

import { ChatRoom } from "./ChatRoom"
import { EmptyScreen } from "./emtylayout/EmptyScreen"
import { ChatsBanner } from "../lateralBanner/ChatsBanner"
import { BrowserBanner } from "../lateralBanner/BrowserBanner"

import { getChats, listenerNewMessage } from "../../domain/chatRoom/chatLogic"
import { connectSokcet, newMessageEvent } from "../../domain/home/homeLogic"
import { Direction } from "../../domain/router/routers"

import "./style/homeScreenStyle.css"

export function Home() {
    const [roomSelected, setRoomSelected] = useState(null)
    const [friends, setFriends] = useState(null)
    const [navigattion, setNavigation] = useState(Direction.CHATS)
    const navigate = useNavigate()

    newMessageEvent((newMessage) => {
        const friends = listenerNewMessage(newMessage)
        setFriends([...friends])
    })

    useEffect(() => {
        connectSokcet()
        let isMounted = true

        getChats()
            .then((users) => {
                if (isMounted) {
                    setFriends([...users])
                }
            })
            .catch((err) => console.log(err))

        return () => {
            isMounted = false
        }
    }, [])

    const changeBannerPage = (state) => {
        setNavigation(state)
    }

    const userSelected = (roomId) => {
        setRoomSelected(roomId)
    }

    return (
        <main className="homeContainer">
            <Box className="bannerContainer">
                {navigattion === Direction.CHATS ? (
                    <ChatsBanner
                        friends={friends}
                        userSelected={userSelected}
                        onClickNotification={changeBannerPage}
                    />
                ) : (
                    <BrowserBanner onBackPressed={changeBannerPage} />
                )}
            </Box>
            <>
                {roomSelected === null ? (
                    <EmptyScreen />
                ) : (
                    <ChatRoom roomSelected={roomSelected} />
                )}
            </>
        </main>
    )
}
