import { IoMdNotifications, IoIosSearch } from "react-icons/io"

import { getUserName } from "../../domain/home/homeLogic"
import { UserCard } from "./UserCard"
import { MenuOptions } from "./Menu"
import { SearchInput } from "./SearchInput"


import { Direction } from "../../domain/router/routers"
import { Avatar, List } from "@mui/material"

export const ChatsBanner = ({ friends, userSelected, onClickNotification }) => {
    
    return (
        <>
            <div className="bannerHeader">
                <div className="userInfo">
                    <Avatar 
                        id="userImage"
                        alt="userPictureProfile"
                        sx={{ width: 50, height: 50 }}
                    />
                    <p id="user-name">{getUserName()}</p>
                </div>
                <div className="notification">
                    <IoIosSearch
                        className="icons-banner"
                        size={22}
                        onClick={ (e) => {
                            onClickNotification(Direction.BROWSER)
                        }}
                        
                    />
                    <IoMdNotifications
                        className="icons-banner"
                        size={22}
                        onClick={ (e) => {
                            
                        }}
                        
                    />
                    <MenuOptions />
                </div>
            </div>
            <SearchInput />
            <List className="chat-container">
                {friends?.map((user, index) => {
                    return (
                        <UserCard
                            key={user.id}
                            user={user}
                            eventOnClick={userSelected}
                        />
                    )
                })}
                <div className="banner-footer">
                    <small className="banner-title">Have fun chatting!!</small>
                </div>
            </List>
        </>
    )
}
