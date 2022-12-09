import React, {useEffect} from 'react';
import pageImg from "../../assets/img.background/cannoli-background.png";
import TextContainer from "../../components/pageLayout/container/textContainer/TextContainer";

function PrivacyPolicy({headerImageHandler,pageTitleHandler}) {
    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Privacy policy");
    }, []);

    return (
        <TextContainer>

            <p> Uw privacy is voor cannoli-sr-ruffino van groot belang. Wij houden ons dan ook aan de privacywet
            (de Algemene verordening gegevensbescherming. Hierna ook de "AVG"). Dit betekent dat uw gegevens veilig
            bij ons zijn en dat wij ze altijd netjes gebruiken.</p>

        </TextContainer>
    );
}

export default PrivacyPolicy;