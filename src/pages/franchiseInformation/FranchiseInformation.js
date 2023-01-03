import React, {useEffect} from 'react';
import TwoColumn from "../../components/pageLayout/designElement/column/TwoColumn";
import TextContainer from "../../components/pageLayout/designElement/container/textContainer/TextContainer";
import BookmarkBox from "../../components/pageLayout/designElement/box/bookmarkBox/BookmarkBox";
import Column from "../../components/pageLayout/designElement/column/Column";

function FranchiseInformation({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {

        pageTitleHandler("Cannoli-sr-ruffino");
    }, []);
    return (

        <div>
            <TextContainer>
                <h2>Franchise</h2>
                <p>"Nieuw begin = Nieuw start"<strong>
                    wordt Franchiser</strong></p>
            </TextContainer>

            <button type="button"><span className="btn-text">Informatie</span></button>

            <TwoColumn>
                <h2>Franchiseinformatie</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi <strong>
                    asperiores consectetur ex illum
                    ipsum minima molestias officiis perferendis, recusandae repellat.</strong>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, officia?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi <strong>
                    asperiores consectetur ex illum
                    ipsum minima molestias officiis perferendis, recusandae repellat.</strong>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, officia?</p>
            </TwoColumn>

            <BookmarkBox verticalText="">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, velit?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, eaque!</p>
            </BookmarkBox>

            <TwoColumn>
                <h2>Franchise</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi <strong>
                    asperiores consectetur ex illum
                    ipsum minima molestias officiis perferendis, recusandae repellat.</strong>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, officia?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi <strong>
                    asperiores consectetur ex illum
                    ipsum minima molestias officiis perferendis, recusandae repellat.</strong>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, officia?</p>
            </TwoColumn>
        </div>
    );
}

export default FranchiseInformation;