import chats from "../../../../chat_data"


export default function MessagePane(){ 
    return(
        <div className="message-pane-main">
            <div className="chat-header">
                <div className="chat-header-left">
                    <img className="chat-header-back-arrow" src="arrow_back_black_24dp.svg" alt="arrow back" />
                    <div className="chat-header-profile">
                        <img src={chats[1].image} alt="profile" />
                        <div className="chat-header-username">
                        {chats[1].user}
                        </div>
                    </div>
                </div>
                <img className="chat-header-info" src="info.svg" alt="chat info" />
            </div>
            <div className="messages-main-wrapper">
                <div className="message-content-wrapper">
                    <div className="message-content">
                        <div className="message">
                            <div className="block"></div>
                            <div className="block">
                                <div className="message-bubble">
                                    <span className="message-text">
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
                    </div>
                </div>

                <div className="message-content-wrapper">
                    <div className="sent-message">
                        <div className="block"></div>
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

            <div className="message-box-main">
                <div className="message-box">
                    <textarea name="" 
                    placeholder="Write a message..">
                    </textarea>
                </div>
                <div className="message-icons-main">
                    <div className="block"></div>
                    <div className="message-icons">
                        <div className="icon">
                            <label>
                                <img src="attach_image.svg" alt="attach" />
                                <input type="file" multiple></input>
                            </label>
                        </div>
                        <div className="icon">
                                <img src="send.svg" alt="send" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}