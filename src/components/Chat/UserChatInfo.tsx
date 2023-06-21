import chats from "../../../chat_data"
import "../../styles/specific.css"

export default function UserChatInfo() {
    return (
        <div className="user-chat-info hide-display">
            <div className="chat-header mobile-display-toggle">
                <div className="chat-header-left">
                    <img className="chat-header-back-arrow" src="/chat/arrow_back_black_24dp.svg" alt="arrow back" />
                    <div className="chat-header-profile">
                        <div className="chat-header-username">
                                Job Status
                        </div>
                    </div>
                </div>
            </div>
            <div className="user-chat-info-body">
                <div className="user-chat-info-body-inner">
                    <div>
                        <p>
                            {chats[1].user} has not purchased any prompts from you.
                        </p>
                    </div>
                    <div>
                        <p>
                            You are currently not eligible to accept custom prompt job payments. Read our 
                            <a href="" className="underline">
                            FAQ
                            </a>
                             page for more information.
                        </p>
                        <div className="line"></div>
                    </div>
                    <div className="sale-main-wrapper">
                        <div className="profile-picture-wrapper profile-pic-border">
                            <img className="profile-picture" src={chats[1].image} alt="profile-picture" /> 
                        </div>
                        <div className="profile-user-info">
                            <h4>{chats[1].user}</h4>
                            <p className="bio">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque nihil voluptate delectus eos et, sunt reiciendis. Recusandae adipisci quos dolore corporis nam consequatur ut ea laborum. Neque magnam ratione corporis!
                            </p>
                            <div className="stats-info-main">
                                <div>
                                    <div className="stats">
                                        <div className="stat stat-views">
                                            <img src="/chat/views.svg" alt="views" />
                                            <span>2.7k</span>
                                        </div>
                                        <div className="stat">
                                            <img src="/chat/sales.svg" alt="sales" />
                                            <span>43</span>
                                        </div>
                                    </div>
                                    <div className="ranking">
                                        PromptBroker Rank: 
                                        <b>#382</b>
                                    </div>
                                    <div className="ranking">
                                        Joined: <b>Feb 15, 2023</b>
                                    </div>
                                </div>

                            </div>
                            <div className="socials"></div>
                        </div>
                        <div>
                            <div>
                                <button className="action-btn">
                                    Buy Custom Prompt
                                </button>
                                <div className="rates">
                                    <i>
                                        @
                                        <span>hadgood</span>
                                        charges <b>$39.99</b>
                                        / custom prompt
                                    </i>
                                </div>
                            </div>
                            <button className="view-profile action-btn">
                                View Profile
                            </button>
                            <p>Your jobs with @ 
                                <span>
                                    hadgood
                                </span>
                                will appear below once you purchase a custom prompt.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}