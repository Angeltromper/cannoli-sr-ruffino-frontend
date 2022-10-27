import React from 'react';
import logo from '../../../assets/img.background/cannoli-background.png';
import Nav from
import "./Header-module.css";
import {NavLink} from "react-router-dom";

function Header({headerImg, pageTitle}) {
    const history = useNavigate();

    const tolink = (e) => {
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
            <NavLink to={}





        </>
    )


}