import React,{useState} from 'react';
import { useMyContext,chatBot } from '../context/Provider';

function Chatbot() {
    const {state,dispatch} = useMyContext();
    const [message, setMessage] = useState("");

    const submit = (e) => {
        e.preventDefault();
        chatBot(dispatch,message);
    };

  return (
    <div className="chat_bot_container">  
        <div className="chat_bot_container">
            <div className="chat_bot_content_box">
                <div id="chat_bot_scrolleables_container">
                    {state.userMessages.map((userMsg, index) => (
                        <div key={`user-${index}`} className="chat_bubble_container">
                            <div className="chat_bot_user_bubble">
                                <p>{userMsg}</p>
                            </div>
                        </div>
                    ))}
                    {state.chatBotMessages.map((chatBotMsg, index) => (
                        <div key={`chatbot-${index}`} className="chat_bubble_container">
                            <div className="chat_bot_bubble">
                                <p>{chatBotMsg}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="chat_bot_footer">
            
            <div className="chat_bot_input_container">
    
                <form onSubmit={submit}>
                    <input type="text" id="chat_bot_input_box_text" name="message" placeholder="Message" autoFocus value={message} 
                    onChange={(e) => setMessage(e.target.value)}/>
                    <button type="submit"  id="chat_bot_input_box_button">Send</button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Chatbot;