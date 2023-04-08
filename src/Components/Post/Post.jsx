import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {id, title, body} = post;

    const navigate = useNavigate();
    const optionalButton = () =>{
        navigate(`/post/${id}`)
    }


    return (
        <div className='post'>
            <h5>UserID: {id}</h5>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Show Detail</Link>
            <Link to={`/post/${id}`}><button>Show post Details</button></Link>
            <button onClick={optionalButton}>Optional Button</button>
        </div>
    );
};

export default Post;