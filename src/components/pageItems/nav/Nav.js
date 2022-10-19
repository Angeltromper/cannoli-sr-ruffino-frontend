import React from 'react';
import {NavLink, useLocation} from "react-router-dom";

function Nav(){
    let location = useLocation().pathname;
    console.log(location);

    function getNavClass(location) {
        switch (location) {
            case "":
                return "/nav-home";
            case

        }

    }
}