import React, {useEffect, useState} from 'react'
import './Homepage.css';
import * as PropTypes from "prop-types";

function TextContainer() {
    return null;
}

TextContainer.propTypes = {children: PropTypes.node};

function HomePage({pageTitleHandler}) {

    useEffect(() => {
        pageTitleHandler("Heerlijk moment genieten");
    }, []);


    return (
        <div>
            <TextContainer>
                <h2>Welkom op de site van Cannoli-SR-Ruffino</h2>
            </TextContainer>
        </div>
    );
}

export default HomePage;



