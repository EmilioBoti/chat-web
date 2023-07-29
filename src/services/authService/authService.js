import { baseUrl } from "../../helpers/config"

export const access = async (data) => {

    const res = await fetch(`${baseUrl}/api/login`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return res.json()
}