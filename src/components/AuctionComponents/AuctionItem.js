import React, {useEffect, useState} from 'react';
import {BsCurrencyEuro} from 'react-icons/bs'
import Card from "../../UI/Card";
import Countdown from 'react-countdown';
import http from "../../plugins/http";

const AuctionItem = ({item}) => {

    const renderer = ({hours, minutes, seconds, completed}) => {
        if (completed) {
            http.get(`auctionEnded/${item._id}`).then(res => {
                console.log(res)
            })
            return null;
        } else {
            if (minutes <= 9) {
                minutes = '0' + minutes;
            }
            if (hours <= 9) {
                hours = '0' + hours;
            }
            if (seconds <= 9) {
                seconds = '0' + seconds;
            }
            return <span>{hours}h:{minutes}min:{seconds}sec</span>
        }
    };

    return (
        <Card isEnded={item.isEnded}>
            <div className={'d-flex flex-grow3'}>
                <img src={item.picture} alt=""/>
                <div className={'info d-flex flex-column'}>
                    <div>{item.title}</div>
                    <strong className={'d-flex align-center'}>Current Price: {item.start_Price} <BsCurrencyEuro/>
                    </strong>
                    <h4>Publisher: {item.owner_name}</h4>
                </div>
            </div>
            {!item.isEnded ?
                <div className={'flex-grow1 d-flex flex-column'}>
                    <strong>Time left:</strong>
                    <div className={'d-flex'}>
                        <Countdown date={item.end_time} renderer={renderer}/>
                    </div>
                </div>
                :
                <div className={'flex-grow1 d-flex flex-column'}>
                    <h2>Ended</h2>
                </div>
            }
        </Card>
    );
};

export default AuctionItem;