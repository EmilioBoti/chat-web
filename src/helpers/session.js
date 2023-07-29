const TOKEN = "token"
const SESSION = "session"

export const saveToken = (data) => {
    window.localStorage.setItem(TOKEN, JSON.stringify(data))
}

export const removeToken = () => {
    window.localStorage.removeItem(TOKEN)
}

export const getSession = () => {
    return JSON.parse(window.localStorage.getItem(TOKEN))
}
