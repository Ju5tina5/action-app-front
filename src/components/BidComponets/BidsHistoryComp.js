import React, {useEffect, useState} from 'react';
import http from "../../plugins/http";
import {useNavigate} from "react-router-dom";
import BidItem from "./BidItem";

const BidsHistoryComp = () => {

    const [userBids, setUserBids] = useState([]);

    const nav = useNavigate();

    useEffect( () => {
        http.get('getUserBids').then( res => {
            if (res.message === 'Not logged in') {
                nav('/login')
            }
            if(res.success){
                setUserBids(res.bids)
            }
        })
    }, [])


    return (
        <div className={'bidHistory flex-grow3'}>
            {userBids.length === 0 ?
                <h2>No bids yet</h2>
                :
                userBids.map( (x, i) => <BidItem key={i} item={x}/> )
            }
        </div>
    );
};

export default BidsHistoryComp;