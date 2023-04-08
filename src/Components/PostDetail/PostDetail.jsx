import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {

    const post = useLoaderData()
    // console.log(post)
    const {id, userId, title, body} = post;

    const navigate = useNavigate();
    const goBack = () =>{
        navigate(-1);
    }

    return (
        <div>
            <h2>Details About your post of: {id}</h2>
            <h5>{title}</h5>
            <p><small>{body}</small></p>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;