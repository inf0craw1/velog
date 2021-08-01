import React from 'react';
import './Profile.css';
import Header from "../containers/Header";

const MenuItem = ({active, children, to}) => (
    <div className="menu-item">
            {children}
    </div>
)

const Profile1 = () => {
    return (
        <div>
            <div className="logo">
                <Header></Header>
                <div className="menu">
                    <MenuItem to={'/User1post'}>글</MenuItem>
                    <MenuItem to={'/User1series'}>시리즈</MenuItem>
                    <MenuItem to={'/User1info'}>소개</MenuItem>
                    </div>
            </div>
            
        </div>
    );
};

export default Profile1;