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
            <div className="message">
            </div>
        </div>
    )
}