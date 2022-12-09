import React from 'react';
import {useCannoliContext} from "../../../context/CannoliContext";

function NavTitle() {
    const {pageTitle}= useCannoliContext();
    return (
        <h className="mobile-title">{pageTitle}</h>
    );
}

export default NavTitle;