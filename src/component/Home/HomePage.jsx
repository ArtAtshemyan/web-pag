import React from 'react';
import {NavLink} from "react-router-dom";
import './HomePage.css';
import {Outlet} from "react-router";



function HomePage() {
    return (
        <div className='Home__Page'>
            <h1 className='Home__header'>Welcome to Login or Registration</h1>
            <div className='Home___Header'>
                <nav className='Home__Navigation'>
                    <NavLink className="Home__Link" to='login'>Login</NavLink>
                    <NavLink className="Home__Link" to='registration'>Registration</NavLink>
                </nav>
            </div>
            <div className='Home__Main'>
                <Outlet/>
            </div>
        </div>
    );
}

export default HomePage;