import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import BidsHistoryComp from "../components/BidComponets/BidsHistoryComp";
import http from "../plugins/http";
import AuctionItemFull from "../components/AuctionComponents/AuctionItemFull";
import AllBidsComp from "../components/BidComponets/AllBidsComp";

const SingleAuctionPage = () => {

    const [auction, setAuction] = useState(null);

    const {id} = useParams();

    const nav = useNavigate();


    useEffect( () => {
        http.get(`getSingleAuction/${id}`).then( res => {
            setAuction(res.auction)
            console.log(res)
        })
    }, [] )

    return (
        <div className={'d-flex flex-column align-center justify-center'}>
            {auction &&  <AuctionItemFull item={auction} setAuction={auction}/>}
            {auction && <AllBidsComp bids={auction.bids}/>}
        </div>
    );
};

export default SingleAuctionPage;