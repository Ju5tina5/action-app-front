import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AiOutlineLogout} from "react-icons/ai";
import http from "../plugins/http";
import MainContext from "../context/MainContext";
import {BsCurrencyEuro} from 'react-icons/bs'

const FullToolBar = () => {

    const {user, setUser} = useContext(MainContext);

    const handleLogOut = () => {
        http.get('logout').then(res => {
            if (res.success) setUser(null);
        })
    }
    return (
        <>
            <Link to={'/'}>All Auctions</Link>
            <Link to={'/createAuction'}>Create Auction</Link>
            <Link to={'/'} className={'d-flex align-center'} onClick={handleLogOut}>Log Out <AiOutlineLogout/></Link>
            <Link to={'/userProfile'}>
                <div className={'miniProfile d-flex justify-center align-center'}>
                    <img src={user.avatar} alt=""/>
                    <em>{user.user_name}</em>
                    <p className={'d-flex align-center'}>{user.money} <BsCurrencyEuro/></p>
                </div>
            </Link>
        </>
    );
};

export default FullToolBar;