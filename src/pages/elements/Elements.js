import React, {useEffect} from 'react';
import Img from '../../assets/img.background/cannoli-background.png';
import TextContainer from "../../components/pageLayout/designElement/container/textContainer/TextContainer";
import PriceContainer from "../../components/pageLayout/designElement/container/priceContainer/PriceContainer";
import ContentBox from "../../components/pageLayout/designElement/box/contentBox/ContentBox";
import BookmarkBox from "../../components/pageLayout/designElement/box/bookmarkBox/BookmarkBox";
import TwoColumn from "../../components/pageLayout/designElement/column/TwoColumn";
import Column from "../../components/pageLayout/designElement/column/Column";


function Elements({headerImageHandler, pageTitleHandler}) {

    useEffect ( () => {
        headerImageHandler(Img);
        pageTitleHandler ("Design elementen");
    }, [] );
    return (
        <div>

            <TextContainer>
                <h1>Dit is een H1</h1>
                <p>Dit is tekst</p>
                <h2>Dit is een h2</h2>
                <p>Dit is tekst</p>
                <h3>Dit is een h3</h3>
                <p>Dit is tekst</p>
                <h4>Dit is een h4</h4>
                <p>Dit is tekst</p>
                <button type="button"><span className="btn-text">Button</span></button>
            </TextContainer>
            <TextContainer>
                <h1>Dit is een textContainer</h1>
            </TextContainer>
            <PriceContainer>Dit is een priceContainer</PriceContainer>
            <ContentBox>Dit is een ContentBox</ContentBox>
            <BookmarkBox verticalText="box"><p>Dit is een BookmarkBox</p></BookmarkBox>

            <p>Dit is TwoColumn</p>
            <h2>titel</h2>
            <p>tekst</p>
            <button type="button"><span className="btn-text">Dit is een button</span></button>

            <BookmarkBox verticalText="">
                <p>tekst</p>
                <p>tekst</p>
            </BookmarkBox>

            <TwoColumn>
                <Column>
                    <h2>TwoColumn</h2>
                    <p>tekst</p>
                </Column>

                <Column>
                    <h2>TwoColumn</h2>
                    <p>tekst</p>
                </Column>
            </TwoColumn>

        </div>
    );
}

export default Elements;


