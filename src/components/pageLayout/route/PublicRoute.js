import React, {useContext} from 'react';
import {AuthContext} from "../../../context/AuthContext";


function PublicRoute({children}) {
    const { auth } = useContext(AuthContext);

    return (
            auth === true ? children : <Navigate to="/inloggen" />
    );
}

export default PublicRoute