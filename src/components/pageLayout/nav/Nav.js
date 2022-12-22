import React,{useContext, useState} from 'react';
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../../context/AuthContext";
import { menuItems } from '../../menuItems/MenuItems';
import styles from './Nav.module.css';

function Nav() {
    return (
        <nav>
            <ul>
                {menuItems.map((menu, index) => {
                    return (
                        <li className="menu-items" key={index}>
                            <a href={menu.url}>{menu.title}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Nav;
