import React from 'react';
import { Link } from 'react-router';
import './Profile.css';

const MenuItem = ({active, children, to}) => (
    <Link to={to} className={`menu-item ${active ? 'active': ''}`}>
            {children}
    </Link>
);

const profile1 = (props, context) => {
    const { router } = context;
    return (
        <div>
            <div className="logo">
                velog
            </div>
            <div className="menu">
                <MenuItem to={'/'} active={router.isActive('/', true)}>글</MenuItem>
                <MenuItem to={'/'} active={router.isActive('/about')}>시리즈</MenuItem>
                <MenuItem to={'/'} active={router.isActive('/post')}>소개</MenuItem>
            </div>
        </div>
    );
};

Header.contextTypes = {
    router: React.PropTypes.object
}

export default profile1;