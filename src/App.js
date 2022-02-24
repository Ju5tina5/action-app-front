import './App.css';
import {Routes, Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import NavBarComp from "./layout/NavBarComp";
import FooterComp from "./layout/FooterComp";
import RegisterPage from "./pages/RegisterPage";
import AllAuctionsPage from "./pages/AllAuctionsPage";
import SingleAuctionPage from "./pages/SingleAuctionPage";
import CreateAuctionPage from "./pages/CreateAuctionPage";
import {useState} from "react";
import MainContext from "./context/MainContext";
import UserProfilePage from "./pages/UserProfilePage";

function App() {

    const [user, setUser] = useState(null);
    const [allAuctions, setAllAuctions] = useState([]);

    return (
        <div className="App">
            <MainContext.Provider value={{user, setUser, allAuctions, setAllAuctions }}>
                <NavBarComp />
                <Routes>
                    <Route path={'/login'} element={<LoginPage/>}/>
                    <Route path={'/register'} element={<RegisterPage />}/>
                    <Route path={'/'} element={<AllAuctionsPage />} exact/>
                    <Route path={'/userProfile'} element={<UserProfilePage />}/>
                    <Route path={'/singleAuction/:id'} element={<SingleAuctionPage />}/>
                    <Route path={'/createAuction'} element={<CreateAuctionPage />}/>
                </Routes>
                <FooterComp/>
            </MainContext.Provider>

        </div>
    );
}

export default App;
