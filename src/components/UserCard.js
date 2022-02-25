import React, {useContext, useEffect, useRef} from 'react';
import MainContext from "../context/MainContext";
import Button from "../UI/Button";
import {BsCurrencyEuro} from "react-icons/bs";
import http from "../plugins/http";
import {useNavigate} from "react-router-dom";

const UserCard = () => {

    const nav = useNavigate();

    const {user, setUser} = useContext(MainContext);


    useEffect( () => {
        if(!user){
            nav('/login')
        }
    }, [] )


    const avatarRef = useRef();

    const handleAvatarUpdate = () => {

        const obj = {
            avatar: avatarRef.current.value
        };

        http.post(obj, 'updateAvatar').then(res => {
            if (res.message === 'Not logged in') {
                nav('/login')
            }
            if (res.success) {
                setUser(res.user)
            }
        })
    }

    return (
        <div className={'userCard flex-grow2 d-flex flex-column'}>
            {user &&
            <>
                <h2>{user.user_name}</h2>
                <img src={user.avatar} alt=""/>
                <div className={'d-flex flex-column'}>
                    <input ref={avatarRef} placeholder={"Photo url"} defaultValue={user.avatar}/>
                    <Button onClick={handleAvatarUpdate}>Update Avatar</Button>
                </div>
                <strong className={'d-flex align-center'}>Current Money: {user.money} <BsCurrencyEuro/></strong>
            </>
            }

        </div>
    );
};

export default UserCard;