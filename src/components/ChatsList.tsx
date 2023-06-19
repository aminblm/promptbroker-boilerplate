import chats_data from "../../chat_data"

export default function ChatsList(){
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