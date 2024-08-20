import React from 'react';

const Nav = () => {
    // Styles
    const navStyle = "w-full p-2 fixed top-0 z-50 bg-backgroundDark box-border max-w-screen-xl mx-auto";
    const ulStyle = "max-w-7xl mx-auto flex flex-row justify-end space-x-4";
    const liStyle = "relative group";
    const aStyle = "hover-effect";

    // Données de navigation
    const navItems = [
        { href: "#", label: "About" },
        { href: "#", label: "Services" },
        { href: "#", label: "Contact" },
        { href: "#", label: "Home" }
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
