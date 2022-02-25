import React, {useContext} from 'react';
import MainContext from "../../context/MainContext";
import MiniAuctionItem from "./MiniAuctionItem";

const UserAuctionsComp = () => {

    const {user, allAuctions} = useContext(MainContext);

    let filterAuctions = allAuctions.filter( x => x.owner_name === user.user_name )

    return (
        <div className={'userAuctions d-flex flex-column'}>
            {filterAuctions.map( (x, i) =>
                <MiniAuctionItem key={i} item={x}/>
            )}
        </div>
    );
};

export default UserAuctionsComp;