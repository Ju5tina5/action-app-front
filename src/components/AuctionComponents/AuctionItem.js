import React, {useContext, useEffect, useState} from 'react';
import {BsCurrencyEuro} from 'react-icons/bs'
import Card from "../../UI/Card";
import http from "../../plugins/http";
import MainContext from "../../context/MainContext";
import {useNavigate} from "react-router-dom";
import Countdown from "react-countdown";

const AuctionItem = ({item}) => {

    const {setAllAuctions} = useContext(MainContext);

    const nav = useNavigate();

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return <h1>Ended</h1>;
        } else {
            if(hours <= 9){
                hours = '0' + hours;
            }
            if(minutes <= 9){
                minutes = '0' + minutes;
            }
            if(seconds <= 9){
                seconds = '0' + seconds;
            }
            return <span>{hours}:{minutes}:{seconds}</span>;
        }
    };

    const handleCountDownCompletion = () => {
        http.get(`auctionEnded`).then(res => {
            if (res.success) {
                setAllAuctions(res.auctions)
            }
        });
    }


    const handleSingleAuctionSelection = () => {
        nav(`/singleAuction/${item._id}`)
    }

    return (
        <Card onClick={handleSingleAuctionSelection} isEnded={item.isEnded}>
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
                        <Countdown date={item.end_time} renderer={renderer} onStop={handleCountDownCompletion}/>
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