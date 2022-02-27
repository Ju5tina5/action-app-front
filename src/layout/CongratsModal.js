import React, {useContext} from 'react';
import Card from "../UI/Card";
import MainContext from "../context/MainContext";

const CongratsModal = ({auction}) => {

    const {setWonAuction} = useContext(MainContext);

    const closeModal = () => {
        setWonAuction({isActive: false, auctionTitle: ''});
    }

    return (
        <div onClick={closeModal} className={'d-flex justify-center justify-center align-center modal'}>
            <div onClick={e => e.stopPropagation()} className={'d-flex flex-column align-center modalInfo'}>
                <h2>Congratulations!</h2>
                <h4>You won auction: {auction.auctionTitle}</h4>
            </div>
        </div>
    );
};

export default CongratsModal;