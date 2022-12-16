import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {ScreenWidthContext} from "../../context/screenWidthContext";
import Nav from "../../components/pageLayout/nav/Nav";
import NavBarResp from "../../components/pageLayout/navBarResp/NavBarResp";
import Email from "../../assets/mediaIcon/Email.png";
import Phone from "../../assets/mediaIcon/Phone.png";
import Facebook from "../../assets/mediaIcon/Facebook.png";
import Instagram from "../../assets/mediaIcon/Instagram.png";
import Footer from "../../components/pageLayout/footer/Footer";
import FooterResp from "../../components/pageLayout/footerResp/FooterResp";
import styles from "./Contact.module.css";

function Contact() {
    const { screenWidth } = useContext(ScreenWidthContext);

    return (

    <div>
        hello
    </div>

);
}
 export default Contact;




