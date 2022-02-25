import React, {useContext, useEffect, useState} from 'react';
import AuctionItem from "../components/AuctionComponents/AuctionItem";
import http from "../plugins/http";
import MainContext from "../context/MainContext";

const AllAuctionsPage = () => {

    const {allAuctions, setAllAuctions, socket} = useContext(MainContext);

    useEffect(   () => {
        http.get('getAuctions').then( res => {
            if(res.success){
                socket.on('allAuctions', (data) => {
                    setAllAuctions([...data.sortedAuctions])
                })
            }
        })
    }, [])


    return (
        <div className={'d-flex flex-column align-center justify-center'}>
            <h1>All auctions</h1>
            {allAuctions.length === 0
                ? <h1>No Active Auctions</h1>
                :
                allAuctions.map( x =>
                    <AuctionItem key={x._id} item={x}/>
                )
            }
        </div>
    );
};

export default AllAuctionsPage;