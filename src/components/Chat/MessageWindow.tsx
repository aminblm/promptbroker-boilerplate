import chats from "../../../chat_data"


export default function MessageWindow(){ 
    return(
        <div className="message-pane-main hide-display">
            <div className="chat-header">
                <div className="chat-header-left">
                    <img className="chat-header-back-arrow" src="/chat/arrow_back_black_24dp.svg" alt="arrow back" />
                    <div className="chat-header-profile">
                        <img src={chats[1].image} alt="profile" />
                        <div className="chat-header-username">
                        {chats[1].user}
                        </div>
                    </div>
                </div>
                <img className="chat-header-info" src="/chat/info.svg" alt="chat info" />
            </div>
            <div className="messages-main-wrapper">
                <div className="message-content-wrapper">
                    <div className="message-content">
                        <div className="message">
                            <div className="">
                            </div>
                            <div className="">
                                <div className="message-bubble">
                                    <span className="message-text">
                                        Hello World
                                    </span>
                                    <span className="message-timestamp-wrapper">
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
                    <div className="date-separator">
                        <span>
                            May 15, 2023
                        </span>
                    </div>
                    <div>
                        <div className="sent-message message">
                            <div ></div>
                            <div className="message-content">
                                <div className="message-bubble">
                                    <span className="message-text">
                                    lorem ipsum dolore
                                    </span>
                                    <span className="message-timestamp-wrapper">
                                            <span className="message-timestamp">
                                                11:12pm
                                            </span>
                                            <span >
                                                <img src="/chat/double_check_thick.svg" alt="read status" className="read-status-icon"/>
                                            </span>
                                        </span>
                                </div>
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
                                <img src="/chat/attach_image.svg" alt="attach" />
                                <input type="file" multiple></input>
                            </label>
                        </div>
                        <div className="icon">
                                <img src="/chat/send.svg" alt="send" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}