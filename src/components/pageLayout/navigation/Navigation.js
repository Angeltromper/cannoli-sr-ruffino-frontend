import React, {useContext, useState} from 'react';
import {NavLink, useLocation} from "react-router-dom";
import {AuthContext} from "../../../context/AuthContext";
import * as PropTypes from "prop-types";


function Hamburger() {
    return null;
}

Hamburger.propTypes = {isOpen: PropTypes.bool};

function LogButton() {
    return null;
}

LogButton.propTypes = {text: PropTypes.string};

function Navigation() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const {isAuth, logout} = useContext(AuthContext);


    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    let Browserhistory;
    return(
        <div className="navigation__container">
                <ul className={hamburgerOpen ? "navigation__standard" : "navigation-closed navigation__standard"}>
                    <li className="navigation__list-items">
                        <NavLink className="navigation__nav-link" exact to="/"
                                 activeClassName="navigation-nav-link__active">Home</NavLink></li>
                    <li className="navigation__list-items">
                        <NavLink className="navigation__nav-link" exact to="/cannoli"
                                 activeClassName="navigation-nav-link__active">Cannoli</NavLink></li>
                    <li className="navigation__list-items">
                        <NavLink className="navigation__nav-link" exact to="/giftbox"
                                 activeClassName="navigation-nav-link__active">Giftbox</NavLink></li>
                    <li className="navigation__list-items">
                        <NavLink className="navigation__nav-link" exact to="/franchise"
                                 activeClassName="navigation-nav-link__active">Franchise</NavLink></li>
                    <li className="navigation__list-items">
                        <NavLink className="navigation__nav-link" exact to="/service"
                                 activeClassName="navigation-nav-link__active">Service</NavLink></li>
                    <li className="navigation__list-items">
                        <NavLink className="navigation__nav-link" exact to="/contact"
                                 activeClassName="navigation-nav-link__active">Contact</NavLink></li>
                    <li className="navigation__list-items">
                        {isAuth ?
                            <LogButton
                                text="logout"
                                onClick={logout}
                            />
                            :
                            <LogButton
                                text="login"
                                onClick={() => Browserhistory.push ( "/login" )}
                            />
                        }
                    </li>
                </ul>
                <div className="hamburger-outer-container" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen}/>
                </div>
            </div>
        );
}

export default Navigation;