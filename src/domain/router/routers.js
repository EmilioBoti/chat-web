export const Direction = {
    LOGIN: "login",
    HOME: "/",
    HOME: "home",
    BROWSER: "browser",
    CHATS: "chats"
}


export const navigateTo = (Direction) => {
    switch (Direction) {
        case Direction.LOGIN:
            window.location.pathname = Direction.LOGIN
            break
        case Direction.HOME:
            window.location.pathname = Direction.HOME
            break
    }
}

