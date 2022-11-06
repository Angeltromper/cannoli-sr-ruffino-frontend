import React from 'react';
import logo from '../../../assets/logo/Logo Cannoli.png';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context/AuthContext";
import "./Footer-module.css";

function Footer() {
    const {auth} = useContext(AuthContext);

    return (
        <div className="footer-container">
            <hr/>
            <footer className="footer">
                <div className="footer-menu">
                    <h3>Meer info</h3>
                    <ul>
                        <li><Link to="/faq">faq</Link></li>
                        <li><Link to="/privacy-policy">privacy policy</Link></li>
                        <li><Link to="/contact">contact</Link></li>
                        {auth ? <li><Link to="/inloggen">Uitloggen</Link></li> : <li><Link to="/inloggen">Inloggen</Link></li> }
                        {auth && <li><Link to="/profiel">Profiel</Link></li>}
                    </ul>
                </div>
                <div className="footer-txt">
                    <p>Website cannoli-sr-ruffino ontwikkeld voor detaillisten en franchisers, zodat er een mogelijkheid is om online informatie in te winnen
                        over Siciliaanse cannoli's en wat zijn de mogelijkheden en voordelen hiervan.</p>

                    <p>Eindopdracht Full-Stack Developer NOVI College | Angelique Tromper | Copyright © 2022 cannoli-sr-ruffino | Alle Rechten Voorbehouden.</p>
                </div>
                <div className="footer-logo">
                   <img src={logo} alt="cannoli-sr-ruffino.nl logo" className="logo"/>
                    <div className="color-swatches">
                        <div className="footer-color-dark-brown"></div>
                        <div className="footer-color-green"></div>
                        <div className="footer-color-green"></div>
                        <div className="footer-color-pink"></div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;