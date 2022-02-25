import React, {useContext, useState, useEffect, useRef} from 'react';
import MainContext from "../../context/MainContext";
import {useNavigate} from "react-router-dom";
import http from "../../plugins/http";
import {BsCurrencyEuro} from "react-icons/bs";
import Button from "../../UI/Button";

const AuctionItemFull = ({item}) => {

    const {user, setUser, setAllAuctions} = useContext(MainContext);

    const nav = useNavigate();

    const amountRef = useRef();


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
            <span key={index}>{timeLeft[interval]}{" "}{interval}{" "}</span>
        );
    });


    const handleCountDownCompletion = () => {
        http.get(`auctionEnded/${item._id}`).then(res => {
            if (res.success) {
                setAllAuctions(res.auctions)
            }
        });
    }


    const handleBidSubmit = (e) => {
        e.preventDefault();
        const obj = {
            _id: item._id,
            amount: amountRef.current.value
        }

        http.post(obj, 'bidAction').then(res => {
            if (res.message === 'Not logged in') {
                setUser(null);
                return nav('/login')
            }
            console.log(res)
        })
    }

    return (
        <div className={'auctionBig d-flex'}>

            <img src={item.picture} alt=""/>
            <div className={'flex-grow2 d-flex flex-column align-center'}>
                <div>{item.title}</div>
                <strong className={'d-flex align-center'}>Current Price: {item.start_Price} <BsCurrencyEuro/>
                </strong>
                <h4>Publisher: {item.owner_name}</h4>
                {!item.isEnded ?
                    <div className={'d-flex flex-column'}>
                        <strong>Time left:</strong>
                        <div className={'d-flex'}>
                            {timerComponents.length ? timerComponents : handleCountDownCompletion()}
                        </div>
                    </div>
                    :
                    <div className={'d-flex flex-column'}>
                        <h2>Ended</h2>
                    </div>
                }
                {user && user.user_name !== item.owner_name &&
                <form onSubmit={handleBidSubmit} className={'d-flex flex-column'}>
                    <input type="number" ref={amountRef} placeholder={'Your bid'}/>
                    <Button type={'submit'}>Confirm Bid</Button>
                </form>
                }
            </div>
        </div>
    );
};

export default AuctionItemFull;