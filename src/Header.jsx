import React from 'react';
import gk from './Images/gk.png';

const Header = () =>{
    return(
        <>
            <div className="header">
                <img src={gk} alt='logo' width='70' height='50'/>
                <h1>Keep</h1>
            </div>
        </>
    );
};

export default Header;