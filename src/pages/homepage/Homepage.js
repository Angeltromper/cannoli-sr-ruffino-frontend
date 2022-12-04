import React, {useEffect, useState} from 'react';
import pageImg from "../../../src/assets/img.background/cannoli-background.png";
import TextContainer from "../../components/pageItems/pageDesignElements/textContainer/TextContainer";


function HomePage({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler(pageImg);
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



