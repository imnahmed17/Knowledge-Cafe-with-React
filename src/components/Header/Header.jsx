import React from 'react';
import './Header.css';
import userImage from '../../assets/noman.png';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className='navbar-brand h1 ms-3'>Knowledge Cafe</a>
                <img className='me-3' src={userImage} alt="" />
            </nav>
        </div>
    );
};

export default Header;