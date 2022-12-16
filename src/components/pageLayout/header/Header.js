import React from 'react';
import logo from '../../../assets/img.background/cannoli-background.png';
import Nav from "../nav/Nav";
import {useNavigate, Link} from 'react-router-dom';
import styles from './Header.module.css';

function Header({headerImage, pageTitle}) {
    const history = useNavigate();

    const toLink = (e) => {
        e.preventDefault();
        history("/inloggen");
    }

    return (
        <main>
            <header className="header">
                <div className="logo">
                    <Link to="/"><figure><img src={logo} alt="logo" className="logo"/></figure></Link>
                </div>
                <div className="-btn">
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
        </main>
    );
}


export default Header;