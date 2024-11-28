import React from 'react';

function Forum(props){
    return(
        <div class="forum">
                <h2>{props.title}</h2>
                <p>{props.description}</p>      
        </div> 
    );
}

export default Forum;