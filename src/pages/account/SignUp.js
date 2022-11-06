import React, {useEffect, useState} from 'react';
import pageImg from "../../../src/assets/img.background/cannoli-background.png";
import TextContainer from "../../components/pageItems/pageDesignElements/textContainer/TextContainer";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import YellowContentBox from "../../components/pageItems/pageDesignElements/yellowContentBox/YellowContentBox";
import {useContext} from "@types/react";
import {AuthContext} from "../../context/AuthContext";

function SignUp({headerImageHandler, pageTitleHandler}) {
    const [addSucces, toggleAddSuccess] = useState(false);
    const navigate = useNavigate();
    const {register, formState: {errors}, handleSubmit} = useForm({mode: 'onBlur'});
    const source = axios.CancelToken.source();
    const [error, setError] = useState(false);

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Registreren van een account");
    }, [headerImageHandler, pageTitleHandler]);

    const [users, setUsers] = useState([]);

    async function addUser(e) {
        try {
           const response = await axios.post("http://localhost:8080/users/createUser/", {
               username: e.username,
               password: e.password,
               emailAdress: e.emailAdress,
           }, {
               cancelToken: source.token,
           });
           toggleAddSuccess(true);
           navigate("/inloggen");
        } catch (error) {
            console.error('There was an error!', error);
            setError(true);
        }
        ;
    }

    return  (
        <>
            <TextContainer>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem cupiditate deserunt esse,
                    eum expedita itaque libero natus neque, possimus quaerat sint. Ad aperiam asperiores autem eos
                    et expedita fugiat incidunt maxime molestias nobis perferendis provident quae quam quasi,
                    reprehenderit tempora ullam, vero! Ab accusantium alias architecto, cum cumque deleniti,
                    deserunt distinctio ea eaque eum ex excepturi facere neque obcaecati odit perferendis ratione
                    reiciendis repudiandae sapiente sint, suscipit voluptas voluptatum!</p>
            </TextContainer>
            <YellowContentBox>
                {addSucces === true && <p>Gebruiker is toegevoegd!</p>}
                <form onSubmit={handleSubmit(addUser)}>
                    <h3 className="legend">Vul je gegevens in om te registreren</h3>

                    <label htmlFor="details-username">
                        Naam:
                        <input
                            type="text"
                            id="details-username"
                            {...register("username", {
                                required: "Username mag niet leeg zijn.",
                                maxLength: {
                                    value: 20,
                                    message: "Er mogen maximaal 20 karakters gebruikt worden.",
                                },
                            })}
                            placeholder="username"

                        />
                    </label>
                    {error.username && <p className="error-label">{errors.username.message}</p>}
                    <br/>

                    <label htmlFor="details-emailAdress">
                        e-mailadres:
                        <input
                            type="text"
                            id="details-emailAdress"
                            {...register("emailAdress", {
                                maxLength: {
                                    value: 80,
                                    message: "Je emailadres mag maximaal 80 karakters bevatten",
                                },
                                required: "Veld mag niet leeg zijn",
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "Geen geldig e-mailadres"
                                }
                            })}
                        />
                    </label>
                    {errors.emailAdress && <p className="error-label">{error.emailAdress.message}</p>}<br/>

                    <label htmlFor="details-password">
                        Wachtwoord:
                        <input
                            type="password"
                            id="details-password"
                            {...register("password",
                                {
                                    required: "veld mag niet leeg zijn",
                                    minLength: {
                                        value: 8,
                                        message: "Je wachtwoord moet minimaal 8 karakters bevatten",
                                    }
                                })}
                        />
                    </label>
                    {errors.password && <p className="error-label">{errors.password.message}</p>}<br/>

                    <label htmlFor="accept-terms">
                        <input
                            type="checkbox"
                            id="accept-terms"
                            {...register("acceptTerms", {
                                require: "Je kan je alleen registreren als je met onze voorwaarden instemt."
                                })}
                        />
                        Ik ga akkoord met de algemene voorwaarden.
                    </label>
                    {errors.acceptTerms && <p className="error-label">{errors.acceptTerms.message}</p>}
                    <br/>

                    <button type="submit">
                        Registreren
                    </button>
                </form>
                {error && "Er ging iets mis, probeer het later opnieuw."}
            </YellowContentBox>
        </>
    );
}

export default SignUp;