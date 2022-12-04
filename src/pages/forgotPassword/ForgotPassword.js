import React, {useContext, useEffect, useState} from 'react';

import {Link, useNavigate} from "react-router-dom";

import {AuthContext} from "../../context/AuthContext";
import {useForm} from "react-hook-form";
import axios from "axios";
import Cannoli from "../../components/cannoli/Cannoli";

function PageTitle() {
    return null;
}

function ForgotPassword() {
    const {setPageTitle} = useCannoliContext();
    const history = useHistory();
    const {email, setEmail, setFormError, lostPassword, formError} = useAuth();

    async function onSubmit(event) {
        event.preventDefault();

        try {
            const lostPasswordReset = await lostPassword(email);
            setSucces("You have received a recover e-mail.");
            setTimeout(() => {
                history.push('./login');
            }, 3000);
            console.log(lostPasswordReset);

        } catch (event) {
            console.error("FireBase Fail:", event);
            setFormError("This e-mail address does not match with a user account!");
        }
    }

    useEffect(() => {
        setPageTitle("Forgot Your Password ?");
        setFormError('');
        setSucces('')
    }, []);

    return (
        <main className="fullpage-container">
            <section className="left-section-container">
                <figuren className="CannoliCard-container">
                    {formError ? (<CannoliLoader/>):(<CannoliCardLogo/>)}
                </figuren>
            </section>
            <section className="right-section-container">
                <article className="right-box-container">
                    <div className="forgot-container">
                        <div><HelpButton content={11}/></div>
                        <PageTitle title="Forgot Your Password ?"/>
                        <div className="input-container">
                            <form onSubmit={onSubmit}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                />
                                <FormSubmit type="submit" value="Send" disabled={email === ""}/>
                            </form>
                            <FormLink
                                linktext="Back to Login"
                                to="/login"
                            />
                        </div>
                        <FormSuccesMessage/>
                        <FormErrorMessage/>
                    </div>
                </article>
            </section>
            </main>
    )
}

export default ForgotPassword;

