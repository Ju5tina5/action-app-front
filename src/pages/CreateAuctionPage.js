import React from 'react';
import AuctionForm from "../components/AuctionComponents/AuctionForm";

const CreateAuctionPage = () => {
    return (
        <div className={'d-flex flex-column align-center justify-center'}>
            <h1>Create Auction</h1>
            <AuctionForm />
        </div>
    );
};

export default CreateAuctionPage;