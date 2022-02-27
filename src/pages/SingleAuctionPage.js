import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import http from "../plugins/http";
import AuctionItemFull from "../components/AuctionComponents/AuctionItemFull";
import AllBidsComp from "../components/BidComponets/AllBidsComp";

const SingleAuctionPage = () => {

    const [auction, setAuction] = useState();

    const {id} = useParams();

    useEffect( () => {
        http.get(`getSingleAuction/${id}`).then( res => {
            setAuction(res.auction)
        })
    }, [])

    return (
        <div className={'d-flex flex-column align-center justify-center'}>
            {auction &&  <AuctionItemFull item={auction} setAuction={setAuction}/>}
            {auction && <AllBidsComp bids={auction.bids}/>}
        </div>
    );
};

export default SingleAuctionPage;