import { useState } from "react"

import { List } from "@mui/material"

import { UserCard, UserCardSearcher } from "./UserCard"
import { SearchInput } from "./SearchInput"

import { BsArrowLeft } from "react-icons/bs"

import { Direction } from "../../domain/router/routers"
import { retrieveUser } from "../../domain/browser/browserPresenter"

export const BrowserBanner = ({ onBackPressed }) => {
    const [users, setUsers] = useState(null)

    const onInputChange = (value) => {
        retrieveUser(value)
            .then((data) => setUsers(data))
            .catch((err) => console.log(err))
    }

    const userSelected = (e, value) => {
        console.log(e.dataSet)
    }

    return (
        <>
            <div className="bannerHeader ">
                <div className="notification">
                        <BsArrowLeft
                            className="icons-banner"
                            size={22}
                            onClick={(e) => {
                                onBackPressed(Direction.CHATS)
                            }}
                        />
             
                    <span>Back</span>
                </div>
            </div>
            <SearchInput onInputChange={onInputChange} />

            <List className="chat-container">
                <h3 className="bannerHeader">My Search </h3>
                {users?.map((user, index) => {
                    return (
                        <UserCardSearcher
                            key={user.id}
                            user={user}
                            eventOnClick={userSelected}
                        />
                    )
                })}
            </List>
        </>
    )
}
