import React, { useContext } from 'react';
import {NavLink, useLocation} from "react-router-dom";


function Nav() {
    let location = useLocation().pathname;
    console.log(location);

    function getNavClass(location) {
        switch (location) {
            case "":
                return "/nav-home";
            case "/cannoli":
                return "/nav-cannoli";
            case "/giftbox":
                return "/nav-giftbox";
            case "/franchise":
                return "/nav-franchise";
            case "/service":
                return "nav-service";
            case "/contact":
                return "nav-contact";
            default:
                return "nav-home";

        }
    }

    return (
        <div className="nav-container">
        <nav>
            <ul className={getNavClass(location) + "nav-list"}>
                <li><NavLink to="/" end className={(navData) => navData.isActive ? "active-link" : "" }>home</NavLink></li>
                <li><NavLink to="/cannoli" className={(navData) => navData.isActive ? "active-link" : ""}>cannoli</NavLink> </li>
                <li><NavLink to="/giftbox" className={(navData) => navData.isActive ? "active-link" : ""}>giftbox</NavLink></li>
                <li><NavLink to="/franchise" className={(navData) => navData.isActive ? "active-link" : "" }>franchise</NavLink></li>
                <li><NavLink to="/service" className={(navData) => navData.isActive ? "active-link" : "" }>service</NavLink></li>
                <li><NavLink to="/contact" end className={(navData) => navData.isActive ? "active-link" : "" }>contact</NavLink></li>
            </ul>

        </nav>
        </div>
    );
}


export default Nav;