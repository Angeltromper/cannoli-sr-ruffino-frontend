import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context/AuthContext";
import Email from "../../../assets/mediaIcon/Email.png";
import Phone from "../../../assets/mediaIcon/Phone.png";
import "./Footer.css";


function Footer() {
    const {auth} = useContext ( AuthContext );

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
                        {auth ? <li><Link to="/inloggen">Uitloggen</Link></li> :
                            <li><Link to="/inloggen">Inloggen</Link></li>}
                        {auth && <li><Link to="/profiel">Profiel</Link></li>}
                    </ul>
                </div>
                <div className="footer-txt">
                    <h3>Contact</h3>
                    <ol>
                        <img className="email" src={Email} alt="email icoon"/>
                        <h2 className="mail">srruffino@outlook.com</h2>

                        <img className="phone" src={Phone} alt="telefoonnummer icoon"/>
                        <h2 className="nummer">SR.Ruffino:(+31)620940691</h2>

                        <img className="phone" src={Phone} alt="telefoonnummer icoon"/>
                        <h2 className="nummer">E.Jongh Visscher:(+31)648889093</h2>
                    </ol>
                </div>
                <div className="color-figure">
                    <div className="footer-color-pink"></div>
                    <div className="footer-color-green"></div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;











