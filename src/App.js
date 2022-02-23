import './App.css';
import {Routes, Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import NavBarComp from "./layout/NavBarComp";
import FooterComp from "./layout/FooterComp";
import RegisterPage from "./pages/RegisterPage";
import AllAuctionsPage from "./pages/AllAuctionsPage";
import SingleAuctionPage from "./pages/SingleAuctionPage";
import CreateAuctionPage from "./pages/CreateAuctionPage";

function App() {
    return (
        <div className="App">
            <NavBarComp/>
            <Routes>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/register'} element={<RegisterPage />}/>
                <Route path={'/'} element={<AllAuctionsPage />} exact/>
                <Route path={'/singleAuction/:id'} element={<SingleAuctionPage />}/>
                <Route path={'/createAuction'} element={<CreateAuctionPage />}/>
            </Routes>
            <FooterComp/>
        </div>
    );
}

export default App;