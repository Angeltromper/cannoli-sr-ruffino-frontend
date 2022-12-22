import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {ScreenWidthContext} from "../../context/screenWidthContext";
import Nav from "../../components/pageLayout/nav/Nav";
import NavResp from "../../components/pageLayout/navResp/NavResp";
import Email from "../../assets/mediaIcon/Email.png";
import Phone from "../../assets/mediaIcon/Phone.png";
import Facebook from "../../assets/mediaIcon/Facebook.png";
import Instagram from "../../assets/mediaIcon/Instagram.png";
import Contactimage from "../../assets/img.contact/Contactimage .png";
import Footer from "../../components/pageLayout/footer/Footer";
import FooterResp from "../../components/pageLayout/footerResp/FooterResp";
import styles from "./Contact.module.css";
import * as PropTypes from "prop-types";


class TextContainer extends React.Component {
    render() {
        return null;
    }
}

TextContainer.propTypes = {children: PropTypes.node};

function Contact() {
    const { screenWidth } = useContext(ScreenWidthContext);

    return (
        <section>
            <article className="contact">

                <div>
                   {screenWidth < 1200 ? <NavResp /> : <Nav />}
               </div>

                <article>
                    <h1 className="header-contact">Contact</h1>
                    <h2 className="intro-contact">Bent u enthousiast over het product en heeft u een vraag? Lees eerst de
                        <link to="/faq">veel gestelde vragen-pagina</link>,misschien staat uw vraag daar wel tussen.
                        U kunt ons ook telefonisch per mail of via social media bereiken.</h2>

                    <img className="facebook" src={Facebook} alt="facebook icoon"/>
                    <h2 className="facebook-contact">Bezoek ons <a href="https://www.facebook.com/groups/cannoli-sr-ruffino/" target="_blank">
                        facebookgroep</a>voor inspiratie, ideeën en voor eventuele vragen</h2>

                    <img className="instagram" src={Instagram} alt="instagram icoon"/>
                    <h2 className="instagram-contact">Bezoek ons <a href="https://www.instagram.com/groups/cannoli-sr-ruffino/" target="_blank">
                        instagram</a>voor inspiratie, ideeën en voor eventuele vragen</h2>

                    <img className="email" src={Email} alt="email icoon"/>
                    <h2 className="mail">srruffino@outlook.com</h2>

                    <img className="phone" src={Phone} alt="telefoonnummer icoon"/>
                    <h2 className="naam-telefoonnummer">S.Ruffino:(+31)620940691</h2>

                    <img className="phone" src={Phone} alt="telefoonnummer icoon"/>
                    <h2 className="naam-telefoonnummer">E.Jongh Visscher:(+31)648889093</h2>

                    <img className="contact" src={Contactimage} alt="illustratie contact image"/>
                </article>

            </article>
            <button className="contact-aanmelden">
                <Link to="/aanmelden">Aanmelden</Link>
            </button>

            <article className="contact-form">
            </article>


            <br/>
            <br/>

    <div>
        {screenWidth < 950 ? <FooterResp /> : <Footer />}
    </div>
        </section>
    );
}

export default Contact;




