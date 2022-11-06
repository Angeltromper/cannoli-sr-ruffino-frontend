import React, {useEffect, useState} from 'react';
import pageImg from "../../../src/assets/img.background/cannoli-background.png";
import TextContainer from "../../components/pageItems/pageDesignElements/textContainer/TextContainer";
import BookmarkBox from "../../components/pageItems/pageDesignElements/bookmarkBox/BookmarkBox";

function HomePage({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler(pageImg);
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



