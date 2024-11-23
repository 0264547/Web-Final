import React from 'react';

function Advice(){

    return(
        <div class="content-box">

            <div class="forum">
                <form action="/upvote/<%= index %>" method="post">
                    <h2>Title</h2>
                    <p>Description</p>
                    
                    <button name="button_upvote" class="btn">Upvote</button>
                    <span>0</span>
                </form>
                
                <form action="/downvote/<%= index %>" method="post">
                    <button name="button_downvote" class="btn">Downvote</button>
                    <span>0</span>
                </form>
            </div>

            <hr/>        

            <form action="/post" method="get">
                <button name="button_forum" class="btn">Add forum</button>
            </form>  
    </div> 
    );
}

export default Advice;