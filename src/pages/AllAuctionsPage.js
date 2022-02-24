import React, {useEffect, useState} from 'react';
import AuctionItem from "../components/AuctionItem";
import http from "../plugins/http";

const AllAuctionsPage = () => {

    const [allAuctions, setAllAuctions] = useState([]);

    useEffect(   () => {
        http.get('getAuctions').then( res => {
            setAllAuctions([...res.sortedAuctions])
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