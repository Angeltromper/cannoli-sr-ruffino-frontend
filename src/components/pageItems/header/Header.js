import React from 'react';
import logo from '../../../assets/img.background/cannoli-background.png';
import Nav from "./../nav/Nav";
import "./Header-module.css";
import {useNavigate, Link} from 'react-router-dom';

function Header({headerImg, pageTitle}) {
    const history = useNavigate();

    const toLink = (e) => {
        e.preventDefault();
        history("/inloggen");
    }

    return (
        <>
            <header className="header">
                <div className="logo">
                    <Link to="/"><figure><img src={logo} alt="logo" className="logo"/></figure></Link>
                </div>
                <div className="Buttons">
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
    )
}


export default Header;