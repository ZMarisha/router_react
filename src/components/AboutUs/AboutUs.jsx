import React from "react";
import { Link, Outlet } from "react-router-dom";

const AboutUs = () => {
    return (
        <div>
            <h1>About Us</h1>
            <div style={{display: 'grid', fontSize: '24px'}}>
            <Link to='contact'>Our contact</Link>
            <Link to='team'>Our team</Link>

            <Outlet />
            </div>
        </div>
    )
}

export { AboutUs };