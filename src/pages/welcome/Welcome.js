import React, {useEffect} from "react";
import {useCannoliContext} from "../../context/CannoliContext";
import MainButton from "../../components/buttons/mainButton/MainButton";
import HelpButton from "../../components/buttons/helpButton/HelpButton";
import CannoliCardLogo from "../../components/cannoliCardLogo/CannoliCardLogo";
import Contact from "../../pages/contact/Contact";
import Franchise from "../../pages/franchise/Franchise";
import Giftbox from "../../components/giftbox/Giftbox";






import search from '../../assets/icons/navIcons/search.png';
import profile from'../../assets/icons/navIcons/profile.png';
import '../../App.css';
import '../Welcome.css';

function Welcome() {
    const {setPageTitle} = useCannoliContext();

    useEffect(() => {
        setPageTitle('Welcome');
    }, []);

    return (
        <main className= "outer-content-container">
            <section className='left-section-container'>
                <figure className="CannoliCard-container">
                    <CannoliCardLogo/>
                </figure>
            </section>

            <section className='right-section-container'>
                <article className="button-container">
                    <div>
                        <HelpButton content={0}/>
                    </div>
                    <MainButton
                        name="Home"
                        link={"/home"}/>
                    <MainButton
                        name="Cannoli"
                        link={"/cannoli"}/>
                    <MainButton
                        name="Giftbox"
                        link={"/giftbox"}
                    <MainButton
                        name="Franchise"
                        link={"/franchise"}/>
                    <MainButton
                        name="Service"
                        link={"/service"}/>
                    <MainButton
                        name="Contact"
                        link={"/contact"}/>
                    <MainButton
                        name="Profile"
                        icon={profile}
                    <MainButton
                        name="Search"
                        icon={"/search"}/>
                    <MainButton
                        name="Shopping Cart"
                        icon={"/shopping cart"}/>

                </article>
            </section>
        </main>
    )
}

export default Welcome;