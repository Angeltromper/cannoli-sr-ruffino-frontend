import React, {useContext, useState} from 'react';
import {NavLink} from "react-router-dom";
import  {AuthContext} from "../../../context/AuthContext";
import styles from "./NavResp.module.css";
import {HiOutlineMenuAlt4} from "react-icons/hi";
import {toast} from "react-toastify";

function NavResp() {
    const {logout, authState: {isAuth}} = useContext(AuthContext);
    const [showMenu, toggleShowMenu] = useState(false);

    const toggleNav = () => toggleShowMenu(!showMenu);
    const notify = () => toast.error("Je moet ingelogd zijn om deze pagina te kunnen bezoeken.");

    return(
        <nav className="nav">
            <NavLink className= "logo-link" exact to="/">
                <h1 className="logo">Cannoli-SR-Ruffino</h1>
            </NavLink>

            {
               showMenu &&
                (!isAuth ?
                    <ul className="nav-items">
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active-nav-items" exact to="/home">Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active-nav-items" exact to="/cannoli">Cannoli</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active-nav-items" exact to="/giftbox">Giftbox</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active-nav-items" exact to="/franchise">Franchise</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active-nav-items" exact to="/service">Service</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active-nav-items" exact to="/contact">Contact</NavLink></li>
                        <li onClick={notify} className="nav-item"><NavLink className="nav-link" activeClassName="active-nav-items" exact to="/cannoli-snack-prijzen">Cannoli-snack-prijzen</NavLink></li>
                        <li onClick={notify} className="nav-item"><NavLink className="nav-link" activeClassName="active-nav-items" exact to="/cannoli-glutenfree-prijzen">Cannoli-glutenfree-prijzen</NavLink></li>
                        <li onClick={notify} className="nav-item"><NavLink className="nav-link" activeClassName="active-nav-items" exact to="/cannoli-vegan-prijzen">Cannoli-vegan-prijzen</NavLink></li>
                        <li onClick={notify} className="nav-item"><NavLink className="nav-link" activeClassName="active-nav-items" exact to="/aanmelden">Aanmelden</NavLink></li>
                        <li onClick={notify} className="nav-item"><NavLink className="nav-link" activeClassName="active-nav-items" exact to="/inloggen">Inloggen</NavLink></li>
                    </ul>
                    :
                    <ul className="nav-items">
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active-nav-items" exact to="/home">Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active-nav-items" exact to="/cannoli">Cannoli</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active-nav-items" exact to="/giftbox">Giftbox</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active-nav-items" exact to="/franchise">Franchise</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active-nav-items" exact to="/service">Service</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active-nav-items" exact to="/contact">Contact</NavLink></li>
                        <li className="nav-item" onClick={logout}><NavLink className="nav-link" activeClassName="active-nav-items" exact to="/inloggen">Log Out</NavLink></li>
                    </ul>
                )
            }

            <div
                className="hamburger"
                onClick={toggleNav}
            >
                <HiOutlineMenuAlt4 size={25}/>
            </div>
        </nav>
    );
}

export default NavResp;