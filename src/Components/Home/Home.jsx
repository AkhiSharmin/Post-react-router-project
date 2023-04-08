import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderOne from '../Header/HeaderOne';
// import Header from '../Header/Header';


const Home = () => {
    return (
        <div>
            <HeaderOne></HeaderOne>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;