import { baseUrl } from "../../helpers/config"



export const requestUserChats = async (token) => {

    const res = await fetch(`${baseUrl}/api/contacts`, {
        method: "GET",
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        
    })
    
    return res.json()
}

export const requestChatMessage = async (token, signal , roomId) => {

    const res = await fetch(`${baseUrl}/api/messages/${roomId}`, {
        method: "GET",
        signal: signal,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        
    })
    
    return res.json()
}

export const searchUsers = async (token, user) => {

    const res = await fetch(`${baseUrl}/api/chat/${user}`, {
        method: "GET",
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        
    })
    
    return res.json()
}