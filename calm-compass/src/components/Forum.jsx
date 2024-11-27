import React from 'react';
import Button from 'react-bootstrap/esm/Button';

function Forum(props){
    
    return(
        <div class="forum">
            <form action="/upvote/<%= index %>" method="post">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                
                <Button name="button_upvote" class="btn">Upvote</Button>
                <span>{props.upvotes}</span>
            </form>
            
            <form action="/downvote/<%= index %>" method="post">
                <Button name="button_downvote" class="btn">Downvote</Button>
                <span>{props.downvotes}</span>
            </form>        
        </div> 
    );
}

export default Forum;