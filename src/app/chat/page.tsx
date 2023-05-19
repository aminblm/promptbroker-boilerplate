import chats_data from "../../../chat_data"

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

export function ChatsList () {
    return (
        <>
        <div className="wrapper">
           <div className="sidebar">
               <div className="sidebar-border-bottom">
                    {chats_data.map(chat_data =>
                        <div className="conversation-outer-wrapper" key={chat_data.id}>
                            <div className="conversation-inner-wrapper">
                                <div className="profile-picture-wrapper">
                                    <img src={chat_data.image} alt="profile-picture" /> 
                                </div>
                                <div className="conversation-info-wrapper">
                                    <div className="top">
                                        <div className="chat-user">
                                            {chat_data.user}
                                        </div>
                                        <div className="timestamp">
                                            {chat_data.timestamp}
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="last-message">
                                            {chat_data.last_message}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                </div>
            </div>
        </div>
        </>
    )
}

