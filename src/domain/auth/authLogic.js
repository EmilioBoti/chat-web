import { access } from "../../services/authService/authService"

import { saveToken } from "../../helpers/session"

export const login = async ({ email, password }, funCallBack) => {

    const res = await access({ email, pw: password })
    if (res.OK) {
        saveToken({
            id: res.user.id,
            username: res.user.name,
            token: res.token
        })
        funCallBack(true)
    } else {
        funCallBack(false)
    }

}