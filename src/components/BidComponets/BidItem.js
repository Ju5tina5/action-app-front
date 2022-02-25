import React from 'react';
import {BsCurrencyEuro} from "react-icons/bs";

const BidItem = ({item, title}) => {

    return (
        <div className={'bidItem d-flex flex-column justify-evenly'}>
            {title && <h3>{title}</h3>}
            <ul>
                <p>Bid Time: {new Date(item.bid_time).toLocaleString('lt-LT')}</p>
                <li><strong className={'d-flex align-center'}>Bid Amount: {item.price} <BsCurrencyEuro /></strong></li>
                <li><strong className={'d-flex align-center'}>Bid Author: {item.user_name}</strong></li>
            </ul>
        </div>
    );
};

export default BidItem;