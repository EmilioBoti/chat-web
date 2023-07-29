import "./emptylayout.css"

import emptyDraw from "../../../assets/undraw_empty.svg" 
import quickChat from "../../../assets/undraw_quick_chat.svg" 
import shareOpinion from "../../../assets/undraw_share_opinion.svg" 
import socialNetworking from "../../../assets/undraw_social_networking.svg" 
import onlineMessaging from "../../../assets/undraw_online_messaging.svg" 

export function EmptyScreen() {
    return (
        <section className="empty-container">
            <div className="empty">
                <img alt="" srcSet={quickChat}  />
                <div>
                    <p>This is a text, I do not know what put here yet, but something!</p>
                </div>
            </div>
        </section>
    )
}
