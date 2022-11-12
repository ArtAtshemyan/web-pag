import React from 'react';
import './config.css';

function UserConfig() {
    const userInfo = JSON.parse(localStorage.getItem('users'));
    return (
        <div className='User__Config'>
            <span className='UserConfig User__Email'>email: {(userInfo.email.toLowerCase())}</span>
            <span className='UserConfig User__Phone'>phone: +{userInfo.tell}</span>
            <span className='UserConfig User__Date'>birthday: {userInfo.date}</span>
        </div>
    );
}

export default UserConfig;