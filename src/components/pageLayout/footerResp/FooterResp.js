import React from 'react';
import styles from './FooterResp.module.css';
import {Link} from "react-router-dom";
import Email from "../../../assets/mediaIcon/Email.png";
import Phone from "../../../assets/mediaIcon/Phone.png";

function FooterResp() {
    let auth;
    return (
        <article className="footerResp">

            <div className="rowsResp">

                <aside className="column2Resp">
                    <h3 className="headerResp">NAVIGATIE</h3>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/webshop">Webshop</Link></li>
                        <li><Link to="/faq's">Faq's</Link></li>
                        <li><Link to="/allergens">Allergens</Link></li>
                        <li><Link to="/webshop">Contact</Link></li>
                        <li>Mijn Account</li>

                        {auth ? <li><Link to="/inloggen">Uitloggen</Link></li> :
                            <li><Link to="/inloggen">Inloggen</Link></li>}
                        {auth && <li><Link to="/profiel">Profiel</Link></li>}
                    </ul>
                </aside>

                <aside className="column2Resp">
                    <h3 className="headerResp">CONTACT</h3>
                    <ol>
                        <img className="email" src={Email} alt="email icoon"/>
                        <h2 className="mail">srruffino@outlook.com</h2>

                        <img className="phone" src={Phone} alt="telefoonnummer icoon"/>
                        <h2 className="nummer">SR.Ruffino:(+31)620940691</h2>

                        <img className="phone" src={Phone} alt="telefoonnummer icoon"/>
                        <h2 className="nummer">E.Jongh Visscher:(+31)648889093</h2>
                    </ol>
                </aside>

            </div>
            <div className="color-figure">
                <div className="footer-color-pink"/>
                <div className="footer-color-green"/>
            </div>
        </article>
    );
}

export default FooterResp;