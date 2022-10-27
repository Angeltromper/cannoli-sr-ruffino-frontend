import React, {useEffect} from "react";
import {useCannoliContext} from "../../context/CannoliContext";
import MainButton from "../../components/buttons/mainButton/MainButton";
import HelpButton from "../../components/buttons/helpButton/HelpButton";
import CannoliCardLogo from "../../components/cannoliCardLogo/CannoliCardLogo";
import profile from '../../assets/icons/navIcons/profile.png';


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
                        link={"/giftbox"}/>
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
                        link={"/profile"}/>
                    <MainButton
                        name="Search"
                        icon={search}/>
                </article>
            </section>
        </main>
    )
}

export default Welcome;

