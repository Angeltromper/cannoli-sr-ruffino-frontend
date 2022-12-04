import React from 'react';
import logo from '../../../assets/logo/Logo Cannoli.png';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context/AuthContext";
import Email from "../../../assets/mediaIcon/Email.png";
import Phone from "../../../assets/mediaIcon/Phone.png";

import "./Footer.css";
import {useContext} from "@types/react";

function Footer() {
    const {auth} = useContext(AuthContext);

    return (
        <div className="footer-container">
            <hr/>
            <footer className="footer">
                <div className="footer-navigatie">
                    <h3>Navigatie</h3>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/webshop">Webshop</Link></li>
                        <li><Link to="/faq's">Faq's</Link></li>
                        <li><link to="/allergens">Allergens</link></li>
                        <li><link to="/contact">Contact</link></li>
                        {auth ? <li><Link to="/inloggen">Uitloggen</Link></li> : <li><Link to="/inloggen">Inloggen</Link></li> }
                        {auth && <li><Link to="/profiel">Profiel</Link></li>}
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contact</h3>
                    <ol>
                        <img className="email" src={Email} alt="email icoon"/>
                        <h2 className="mail">srruffino@outlook.com</h2>

                        <img className="phone" src={Phone} alt="telefoonnummer icoon"/>
                        <h2 className="nummer">SR.Ruffino:(+31)620940691</h2>

                        <img className="phone" src={Phone} alt="telefoonnummer icoon"/>
                        <h2 className="nummer">E.Jongh Visscher:(+31)648889093</h2>
                    </ol>
                </div


                <div className="footer-txt">

                    <p>Privacy Statement | Algemene voorwaarden | Cookiebeleid </p>
                             <p>Copyright ® 2022 Cannoli-sr-ruffino</p>
                </div>
                <div className="footer-logo">
                   <img src={logo} alt="cannoli-sr-ruffino.nl logo" className="logo"/>

            </footer>
        </div>
    );
}

export default Footer;