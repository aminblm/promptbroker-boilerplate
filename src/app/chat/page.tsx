
export const metadata = {
    title: "Chat"
}
let chats_data  = [
    {   "id": 1,
        "user": "@promptbroker",
        "last_message": "test message ",
        "timestamp": "1 minute ago",
        "image": "https://firebasestorage.googleapis.com/v0/b/promptbase.appspot.com/o/DALLE_IMAGES%2Fic5ASefHHEUQNeovrEKj0NqK5343%2Fresized%2F1680855838510_100x100.webp?alt=media&token=29379ebf-839f-4b1c-8371-e6fd0fdfd568"
    },
    {   "id": 2,
        "user": "@hadgood",
        "last_message": "much longer test message",
        "timestamp": "just now",
        "image": "https://firebasestorage.googleapis.com/v0/b/promptbase.appspot.com/o/DALLE_IMAGES%2FSUUXdtiIyIc8XKWDYL9noDx3GG73%2Fresized%2F1679531684727_100x100.webp?alt=media&token=b7478fe8-40ae-454f-b777-c79aa425fcb3"
    },
    {   "id": 3,
        "user": "@7cloud",
        "last_message": "lorem ipsum dolor sit amet",
        "timestamp": "3 minutes ago",
        "image": "https://firebasestorage.googleapis.com/v0/b/promptbase.appspot.com/o/DALLE_IMAGES%2FSUUXdtiIyIc8XKWDYL9noDx3GG73%2Fresized%2F1679531684727_100x100.webp?alt=media&token=b7478fe8-40ae-454f-b777-c79aa425fcb3"
    },
    
]

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


    )
}
