import { getSession } from "../../helpers/session"
import { searchUsers } from "../../services/chatService/chatService"


const session = getSession()

export const retrieveUser = async (user) => {
    const result = await searchUsers(session.token, user)
    return result
}