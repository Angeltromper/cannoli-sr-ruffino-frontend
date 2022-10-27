import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../../context/AuthContext";


function PrivateRoute({ children }) {
    const { auth } = useContext(AuthContext);

    return (
        auth === true ? children : <NavLink to="/login" />
    );
}

export default PrivateRoute;