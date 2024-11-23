import React from 'react';

function Post(){
    return(
        <form action="/add_forum" method="post">   
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Forum title</label>
                <input type="text" name="title" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Title" required/>
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Forum description</label>
                <input type="text" name="description" class="form-control" id="exampleInputPassword1" placeholder="Description" required/>
            </div>

            <button type="submit" class="btn">Add forum</button>
        </form>
   );
}

export default Post;
