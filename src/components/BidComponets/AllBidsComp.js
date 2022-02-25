import React from 'react';
import BidItem from "./BidItem";

const AllBidsComp = ({bids}) => {

    const reversedItems = bids.map(item => item).reverse();

    return (
        <div className={'auctionBig d-flex align-center flex-column'}>
            <h2>Bids</h2>
            {bids.length === 0 ?
                <h1>NO bids Yet</h1>
                :
                reversedItems.map( (x, i) => <BidItem key={i} item={x}/>)
            }
        </div>
    );
};

export default AllBidsComp;