import chats from "../../../../chat_data"


export default function MessagePane(){ 
    return(
        <div className="message-pane-main">
            <div className="chat-header">
                <div className="chat-header-left">
                    <img className="chat-header-back-arrow" src="https://promptbase.com/assets/icons/arrow_back_black_24dp.svg" alt="arrow back" />
                    <div className="chat-header-profile">
                        <img src={chats[1].image} alt="profile" />
                        <div className="chat-header-username">
                        {chats[1].user}
                        </div>
                    </div>
                </div>
                <img className="chat-header-info" src="https://promptbase.com/assets/icons/info.svg" alt="" />
            </div>
            <div className="messages-main-wrapper">
                <div className="message-content-wrapper">
                    <div className="message-content">
                        <div className="message-bubble">
                            <span className="message-text sent">
                                Hello World
                            </span>
                            <span className="message-timestap-wrap">
                                    <span className="message-timestamp">
                                        11:12pm
                                    </span>
                                </span>
                        </div>
                    </div>
                </div>

                <div className="message-content-wrapper">
                    <div className="recieved-message">

                        <div className="message-content">

                            <div className="message-bubble">
                                <span className="message-text">
                                    Hi
                                </span>
                                <span className="message-timestap-wrap">
                                        <span className="message-timestamp">
                                            11:12pm
                                        </span>
                                    </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}