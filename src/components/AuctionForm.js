import React, {useContext, useRef} from 'react';
import http from '../plugins/http';
import Button from "../UI/Button";
import {useNavigate} from "react-router-dom";
import MainContext from "../context/MainContext";

const AuctionForm = () => {

    const nav = useNavigate();

    const {setUser} = useContext(MainContext);

    const refs = {
        pictureRef: useRef(),
        titleRef: useRef(),
        startPriceRef: useRef(),
        endTimeRef: useRef()
    }

    const handleNewAuctionForm = (e) => {
        e.preventDefault();
        const auctionData = {
            picture: refs.pictureRef.current.value,
            title: refs.titleRef.current.value,
            start_Price: Number(refs.startPriceRef.current.value),
            end_time: Number(refs.endTimeRef.current.value) + Date.now(),
        }

        http.post(auctionData, 'addNewAuction').then( res => {
            console.log(res)
            if(res.message === 'Not logged in'){
                setUser(null);
                return nav('/login')
            }
            if(res.success){
                nav('/')
            }
        })
    }

    return (
        <form onSubmit={handleNewAuctionForm} className={'d-flex flex-column'}>
            <input type="text" ref={refs.pictureRef} placeholder={'Picture url'}/>
            <input type="text" ref={refs.titleRef} placeholder={'Auction Title'}/>
            <input type="number" min='0' ref={refs.startPriceRef} placeholder={'Start Price'}/>
            <label htmlFor="AuctionDuration">Auction Duration</label>
            <select ref={refs.endTimeRef} id="AuctionDuration">
                <option value={60000}>1min</option>
                <option value={300000}>5min</option>
                <option value={3.6e+6}>1 hour</option>
                <option value={1.44e+7}>4 hours</option>
                <option value={8.64e+7}>24 hours</option>
                <option value={6.048e+8}>1 week</option>
            </select>
            <Button type={'submit'}>Submit Auction</Button>
        </form>
    );
};

export default AuctionForm;