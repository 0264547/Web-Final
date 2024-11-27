import React, {useEffect} from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import { useMyContext } from '../context/Provider';
import Forum from './Forum';
import api from '../utils/api';

function Community(){
    const {state,dispatch} = useMyContext();
    const navigate = useNavigate();

    useEffect(() => {
        const getPosts = async () => {
            const res = await api.get('/posts');
            dispatch({
                type: 'GETPOSTS',
                payload: res.data
            }); 
        };

        getPosts();
    }, [dispatch]);

    const posts = state.posts.map((post)=>{
        return(
            <Forum
                title={post.title}
                description={post.description}
                upvotes={post.upvotes}
                downvotes={post.downvotes}
            />
        );
    });

    return(
        <div className="content-box">
            <Button onClick={() => navigate('/post')} name="button_forum" className="btn">Add forum</Button>
            {posts}
    </div> 
    );
}

export default Community;