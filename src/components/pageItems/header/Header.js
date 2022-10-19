import React from 'react';
import Logo from '../../../assets/logo/Logo Cannoli.png';
import {useNavigate, Link} from "react-router-dom";
import Nav from '../nav/Nav';



function Header({headerImage, pageTitle}) {
    const history = useNavigate();

    const toLink = (e) => {
        e.preventDefault();
        history("/inloggen");

    }

    return (
        <>
            <header className="header">
                <div className="logo">
                    <Link to="/"><figure><img src={Logo} alt="logo"className="logo"/></figure></Link>
                </div>
                <div className= "-button">
                         <button type="button" onClick={toLink}><span className="button-text">Inloggen</span></button>
                </div>
            </header>
            <Nav/>
            <div className="header-img-container">
                <figure>
                    <img src={headerImage} className="header-img"/>
                </figure>
                <div className="page-title">
                    <h1>{pageTitle}</h1>
                </div>

            </div>
            </>
    );
}

export default Header;
