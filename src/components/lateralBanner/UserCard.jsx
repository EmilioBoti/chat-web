import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material"

import "./css/card.css"

import { formatName } from "../../helpers/utils"

export function UserCard({ user, eventOnClick }) {
    return (
        <ListItem
            className="user-card"
            onClick={(e) => {
                eventOnClick(user?.roomId)
            }}
        >
            <ListItemAvatar>
                <Avatar src={user?.image_url} sx={{ width: 50, height: 50 }} />
            </ListItemAvatar>
            <ListItemText
                primary={formatName(user?.name)}
                secondary={user?.lastMessage}
            />
            <div className="message-container">
                <small className="message-time">{user?.times}</small>
            </div>
        </ListItem>
    )
}

export function UserCardSearcher({ user, eventOnClick, btnClick }) {
    return (
        <ListItem
            data-id="card"
            className="user-car"
            onClick={(e) => {
                eventOnClick(e, user)
            }}
        >
            <ListItemAvatar>
                <Avatar src={user?.image_url} sx={{ width: 50, height: 50 }} />
            </ListItemAvatar>
            <ListItemText primary={formatName(user?.name)} />
            <button
                data-id="button"
                className="btn-add-friend"
                onClick={(e) => {
                    eventOnClick(e, user)
                }}
            >
                {user.friend.title}
            </button>

        </ListItem>
    )
}
