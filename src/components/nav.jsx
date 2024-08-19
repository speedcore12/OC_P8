import React from 'react';

const Nav = () => {
    const navStyle = "w-full p-2 fixed top-0 z-50 bg-backgroundDark box-border max-w-screen-xl mx-auto";
    const ulStyle = "max-w-7xl mx-auto flex flex-row justify-end space-x-4";
    const liStyle = "relative group";
    
    return (
        <nav className={navStyle}>
            <ul className={ulStyle}>
                <li className={liStyle}><a className="hover-effect" href="#">Home</a></li>
                <li className={liStyle}><a className="hover-effect" href="#">About</a></li>
                <li className={liStyle}><a className="hover-effect" href="#">Services</a></li>
                <li className={liStyle}><a className="hover-effect" href="#">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
