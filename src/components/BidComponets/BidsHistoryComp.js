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
        <div className={'bidHistory d-flex flex-column align-center flex-grow3'}>
            <h2>Bid History</h2>
            {userBids.length === 0 ?
                <h2>No bids yet</h2>
                :
                userBids.map( (x, i) => <BidItem key={i} title={x.auction_title} item={x.bid}/> )
            }
        </div>
    );
};

export default BidsHistoryComp;