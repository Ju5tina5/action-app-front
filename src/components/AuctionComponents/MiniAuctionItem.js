import React, {useContext} from 'react';
import Button from "../../UI/Button";
import http from "../../plugins/http";
import MainContext from "../../context/MainContext";

const MiniAuctionItem = ({item}) => {

    const {allAuctions, setAllAuctions} = useContext(MainContext);

    const handleAuctionRemove = () => {
        http.get(`deleteAuction/${item._id}`).then( res => {
            let tempArr = allAuctions.filter( x => x._id !== res.removedAuction._id);
            setAllAuctions([...tempArr])
        })
    }

    return (
        <div className={'d-flex miniAuctionItem'}>
            <img className={'flex-grow2'} src={item.picture} alt=""/>
            <div className={'d-flex flex-column flex-grow3'}>
                <strong>Current Price: {item.start_Price}</strong>
                {item.isEnded ? <h3>Auction Ended</h3> : <h3>Auction Active</h3>}
                {item.isEnded && <Button onClick={handleAuctionRemove}>Remove Auction</Button>}
            </div>
        </div>
    );
};

export default MiniAuctionItem;