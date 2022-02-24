import React, {useContext, useEffect} from 'react';
import MainContext from "../context/MainContext";
import MiniToolBar from "../components/NavBarComponets/MiniToolBar";
import FullToolBar from "../components/NavBarComponets/FullToolBar";

const NavBarComp = () => {

    const {user} = useContext(MainContext);

    return (
        <nav className={'bar d-flex align-center justify-evenly'}>
            {!user ? <MiniToolBar /> : <FullToolBar />}
        </nav>
    );
};

export default NavBarComp;