import React from "react";
import d from './Header.module.css';
// import { NavLink } from "react-router-dom";
import { CustomLink } from "../CustomLink/CustomLink";


// const activeLink = ({isActive}) => isActive ? d.active : d.item
const Header = () => {
    return (
        <>
            <header className={d.header}>
                <div className={d.item}>
                <CustomLink to='/'>Home</CustomLink>
                </div>
                <div className={d.item}>
                <CustomLink to='blog'>Blog</CustomLink>
                </div>
                <div className={d.item}>
                <CustomLink to='settings'>Settings</CustomLink>
                </div>
            </header>
        </>
    )
}

export default Header;