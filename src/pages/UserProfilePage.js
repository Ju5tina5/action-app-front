import React, {useContext, useEffect} from 'react';
import UserCard from '../components/UserCard'
import BidsHistoryComp from "../components/BidComponets/BidsHistoryComp";
import http from "../plugins/http";


const UserProfilePage = () => {

    useEffect( () => {
        http.get('getUserBids').then( res => {
            console.log(res)
        })
    }, [])

    return (
        <div className={'d-flex flex-column align-center justify-center'}>
            <h1>User Profile</h1>
            <div className={'d-flex'}>
                <UserCard />
                <BidsHistoryComp />
            </div>
        </div>
    );
};

export default UserProfilePage;