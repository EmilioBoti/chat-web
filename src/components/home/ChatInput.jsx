import { useState, useEffect } from "react"
import { RiSendPlaneFill } from "react-icons/ri"

import { BsEmojiSmile } from "react-icons/bs"
import EmojiPicker from "emoji-picker-react"
import { useRef } from "react"

export function ChatInput({ sendMessage }) {
    const [isShownEmojiPicker, setIsShownEmojiPicker] = useState(false)

    const input = useRef(null)
    const emojiPicker = useRef(null)

    useEffect(() => {
        if (isShownEmojiPicker) {
            emojiPicker.current.style.display = "block"
        } else {
            emojiPicker.current.style.display = "none"
        }
    }, [isShownEmojiPicker])

    const handleEmojiPosition = (emoji) => {
        const posCursor = input.current.selectionStart
        const start = input.current.value.substring(0, posCursor)
        const end = input.current.value.substring(
            posCursor,
            input.current.value.length
        )
        const newText = `${start}${emoji}${end}`
        input.current.value = newText
    }

    return (
        <div className="chat-input-container">
            <div className="chat-input">
                <div className="chat-emoji-container">
                    <div
                        className="chat-emoji-picker-container"
                        id="emoji-picker"
                        ref={emojiPicker}
                        onMouseLeave={(e) => {
                            setIsShownEmojiPicker(false)
                        }}
                    >
                        <EmojiPicker
                            lazyLoadEmojis={true}
                            searchDisabled={true}
                            suggestedEmojisMode="recent"
                            onEmojiClick={(e, emoji) => {
                                handleEmojiPosition(e.emoji)
                            }}
                            autoFocusSearch={true}
                        />
                    </div>
                    <BsEmojiSmile
                        fontSize={25}
                        className="chat-emoji-picker"
                        onMouseEnter={(e) => {
                            // if (isShownEmojiPicker) {
                            //     setIsShownEmojiPicker(false)
                            // } else {
                            // }
                            setIsShownEmojiPicker(true)
                        }}
                    />
                </div>
                <textarea
                    id="input-field"
                    rows="1"
                    ref={input}
                    cols={3}
                    placeholder="Type some message"
                    autoCorrect="true"
                />
                <RiSendPlaneFill
                    size={25}
                    className="icon-sender"
                    onClick={(e) => {
                        sendMessage(input.current.value)
                        input.current.value = ""
                    }}
                />
            </div>
        </div>
    )
}
