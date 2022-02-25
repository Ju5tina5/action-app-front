import React, {useContext, useEffect, useState} from 'react';
import {BsCurrencyEuro} from 'react-icons/bs'
import Card from "../../UI/Card";
import http from "../../plugins/http";
import MainContext from "../../context/MainContext";
import {useNavigate} from "react-router-dom";

const AuctionItem = ({item}) => {

    const {setAllAuctions} = useContext(MainContext);

    const nav = useNavigate();

    const calculateTimeLeft = () => {
        const difference = new Date(item.end_time) - Date.now();

        let timeLeft = {}

        if (difference > 0) {
            timeLeft = {
                h: Math.floor((difference / (1000 * 60 * 60)) % 24),
                min: Math.floor((difference / 1000 / 60) % 60),
                sec: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer)
    });


    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval, index) => {
        if (!timeLeft[interval]) {
            return;
        }
        timerComponents.push(
            <span key={index}>{timeLeft[interval]}{" "}{interval}</span>
        );
    });


    const handleCountDownCompletion = () => {
        http.get(`auctionEnded/${item._id}`).then(res => {
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
                        {timerComponents.length ? timerComponents : handleCountDownCompletion()}
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