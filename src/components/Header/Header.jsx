import React from 'react';
import './Header.css';
import userImage from '../../assets/noman.png';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light justify-content-between">
                <p className='h2 fw-semibold'>Knowledge Cafe</p>
                <img src={userImage} alt="" />
            </nav>
            <hr />
        </div>
    );
};

export default Header;