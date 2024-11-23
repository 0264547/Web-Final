import React from 'react';

function Chatbot() {
  return (
    <div class="chat_bot_container">  
        <div class="chat_bot_content_box">
            <div id="chat_bot_scrolleables_container">                                   
                <div id="chat_bot_user_bubble"><p>Bubbl1</p></div>
                <div id="chat_bot_bubble"><p>Bubbl2</p></div>
            </div>

        </div>
        <div class="chat_bot_footer">
            
            <div class="chat_bot_input_container">
    
                <form action="/chat" method="post">
                    <input type="text" id="chat_bot_input_box_text" name="message" placeholder="Message" autofocus/>
                    <button type="submit"  id="chat_bot_input_box_button">Send</button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Chatbot;