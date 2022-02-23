import React from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineLogout} from 'react-icons/ai';
import http from "../plugins/http";

const NavBarComp = ({user, setUser}) => {

    const handleLogOut = async () => {
        await http.get('logOUt').then( res => {
            if(res.success)setUser(null);
        })
    }

    return (
        <nav className={'bar d-flex align-center justify-evenly'}>
            {user ?
                <>
                    <Link to={'/'}>All Auctions</Link>
                    <Link to={'/createAuction'}>Create Auction</Link>
                    <Link to={'/userProfile'}>User Profile</Link>
                    <Link to={'/'} onClick={handleLogOut}>Log Out <AiOutlineLogout /></Link>
                </>
                :
                <>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/register'}>Register</Link>
                </>
            }
        </nav>
    );
};

export default NavBarComp;