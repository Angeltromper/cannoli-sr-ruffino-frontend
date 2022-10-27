import React, {useEffect, useState} from 'react';
import TextContainer from "../cannoliView/pageDesignElements/textContainer/TextContainer";

function HomePage({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        pageTitleHandler("Heerlijk moment genieten");
    }, []);


    return (
        <>
            <TextContainer>
                <h2>Welkom op de site van Cannoli-SR-Ruffino</h2>
            </TextContainer>
        </>
    );
}

export default HomePage;



