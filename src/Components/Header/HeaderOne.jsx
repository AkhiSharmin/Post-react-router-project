import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const HeaderOne = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            {/* <Link to="/friends">Friends</Link> */}
            <ActiveLink to="/friends">Friends</ActiveLink>
            <Link to="/posts">Posts</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default HeaderOne;