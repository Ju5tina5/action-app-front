import React from 'react';
import {Link} from "react-router-dom";

const MiniToolBar = () => {
    return (
        <>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Register</Link>
            <Link to={'/'}>All Auctions</Link>
        </>
    );
};

export default MiniToolBar;