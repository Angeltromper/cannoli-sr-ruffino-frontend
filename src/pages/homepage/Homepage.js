import React, {useEffect, useState} from 'react'
import styles from './Homepage.module.css';
import * as PropTypes from "prop-types";

function TextContainer(props) {
    return null;
}

TextContainer.propTypes = {children: PropTypes.node};

function HomePage({headerImageHandler, pageTitleHandler}) {

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



