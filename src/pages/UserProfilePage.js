import UserCard from '../components/UserCard'
import BidsHistoryComp from "../components/BidComponets/BidsHistoryComp";
import UserAuctionsComp from "../components/AuctionComponents/UserAuctionsComp";
const UserProfilePage = () => {

    return (
        <div className={'d-flex flex-column align-center justify-center'}>
            <h1>User Profile</h1>
            <div className={'d-flex userInfo'}>
                <UserCard />
                <BidsHistoryComp />
            </div>
            <h1>User Auctions</h1>
            <UserAuctionsComp />
        </div>
    );
};

export default UserProfilePage;