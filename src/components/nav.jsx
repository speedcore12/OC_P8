import React from 'react';

const Nav = () => {

    // Styles
    const navStyle = "w-full p-2 fixed top-0 z-50 bg-backgroundDark box-border max-w-screen-xl mx-auto";
    const ulStyle = "max-w-7xl mx-auto flex flex-row flex-wrap justify-center sm:justify-end space-x-4"; 
    const liStyle = "relative group text-center"; 
    const aStyle = "hover-effect text-sm sm:text-base break-words"; 

    // Données de navigation
    const navItems = [
        { href: "#projects", label: "Mes Projets" },
        { href: "#contact", label: "Contact" },
        { href: "#home", label: "Home" }
    ];

    return (
        <nav className={navStyle}>
            <ul className={ulStyle}>
                {navItems.map((item, index) => (
                    <li key={index} className={liStyle}>
                        <a className={aStyle} href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
