import React, {useEffect} from "react";
import {useCannoliContext} from "../../context/CannoliContext";
import MainButton from "../../components/buttons/mainButton/MainButton";
import HelpButton from "../../components/buttons/helpButton/HelpButton";
import profile from '../../assets/navIcon/profile.png';
import styles from './Welcome.module.css';

function Welcome() {
    const {setPageTitle} = useCannoliContext();


    useEffect(() => {
        setPageTitle('Welcome');
    }, []);

    return (

        <main className= "outer-content-container">
                <article className="button-container">
                    <div>
                        <HelpButton content={0}/>
                    </div>

                </article>
        </main>
    )
}

export default Welcome;

