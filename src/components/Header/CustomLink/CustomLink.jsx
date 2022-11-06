import React from "react";
import { Link, useMatch } from "react-router-dom";

const CustomLink = ({children, to}) => {

    const match = useMatch(to);

    return (
        <Link to={to} style={{color: match ? 'purple' : 'white'}}>{children}</Link>
    )
}

export {CustomLink};