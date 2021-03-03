import React from 'react';
import image from '../../images/image/bpl.logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={image} alt=""/>
            <h1>BPL Team Selection</h1>
        </div>
    );
};

export default Header;