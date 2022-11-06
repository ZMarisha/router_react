import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import d from './Layout.module.css'

const Layout = () => {
    return (
        <>
            <Header />
            <main className={d.main}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout;
