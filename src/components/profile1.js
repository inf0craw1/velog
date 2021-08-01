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
            <div className="App">
                <Header></Header>
            </div>
            <div className="menu">
                <MenuItem>글</MenuItem>
                <MenuItem>시리즈</MenuItem>
                <MenuItem>소개</MenuItem>
            </div>
        </div>
    );
};

export default Profile1;