import chats_data from "../../../chat_data"
import ChatsList from "../../components/ChatsList"

export const metadata = {
    title: "Chat"
}


export default function Chat() {

    // Conditional rendering. Check whether chat data exists and render the right data
    return ( 
        <div>
            {chats_data.length > 0
            ? <ChatsList/>
            : <div className="chat-main-empty">
            <div>
                <h2>
                    You have no chats &#x3a;&#40;
                </h2>

                <p>
                
                    Conversations will appear here if you message another user.  
                </p>
            </div>

        </div>
        }
        </div>
    )
}
