import { Avatar, Box } from "@mui/material"
import { useEffect, useState } from "react"
import { useRef } from "react"
import { GoSearch } from "react-icons/go"

export function ChatActionBar({ name, image, isOnline }) {
    const [isShownInput, setIsShownInput] = useState(false)

    const searcherInput = useRef(null)

    const showInput = (e) => {
        if (isShownInput) {
            searcherInput.current.style.display = "none"
            setIsShownInput(false)
        } else {
            searcherInput.current.style.display = "block"
            setIsShownInput(true)
        }
    }

    return (
        <Box className="chat-actionBar">
            <div className="chat-userInfo">
                <Avatar
                    src={image}
                    alt=""
                />
                <p id="chat-user-name">{name}</p>
                <span className="online"></span>
            </div>
            <div className="searcher-message-container">
                <input
                    ref={searcherInput}
                    type="text"
                    placeholder="search for message..."
                    className="searcher-input"
                />
                <GoSearch
                    className="search-icon-message"
                    cursor="true"
                    onClick={showInput}
                />
            </div>
        </Box>
    )
}
