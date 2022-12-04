import React, {useContext,useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import pageImg from "./Profile";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";


function Profile({headerImageHandler, pageTitleHandler}) {
    const [userData, setUserData] = useState ();
    const {user: {username}, logout} = useContext ( AuthContext );
    const [isAdmin, toggleIsAdmin] = useState (false);
    const [isBrand, toggleIsBrand] = useState (false);
    const token = localStorage.getItem ('token');
    const [cannoliDeleted, toggleCannoliDeleted] = useState (false);

    useEffect ( () => {
        headerImageHandler ( pageImg );
        pageTitleHandler ( "Profielpagina" );
    }, [headerImageHandler, pageTitleHandler] );

    useEffect ( () => {
        const source = axios.CancelToken.source ();

        async function getData(id, token) {
            try {
                const response = await axios.get ( `http://localhost:8080/users/${id}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                } );
                setUserData ( response.data );
                response.data.authorities.map ( (userRole) => {
                    if (userRole.authority === "ROLE_ADMIN") {
                        return toggleIsAdmin ( true );
                    }
                    if (userRole.authority === "ROLE_BRAND") {
                        return toggleIsBrand ( true );
                    }
                } )
            } catch (error) {
                console.error ( 'There was an error!', error );
            }
        }

        getData ( username, token );
        return function cleanup() {
            source.cancel ();
        }

    }, [] );

    async function deleteCannoli(CannoliId) {
        try {
            const response = await axios.delete ( `http://localhost:8080/cannoli/delete/${cannoliId}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer &{token}`,
                    }
                } );

        } catch (error) {
            console.error ( "een error met data ophalen", error );
        }
        toggleCannoliDeleted ( !cannoliDeleted );
    }

    useEffect ( () => {
        async function fetchData() {
            try {
                const response = await axios.get ( `http://localhost:8080/cannoli/`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        }
                    } );
                setCannoliList ( response.data.map ( (cannoli) => {
                        return <li key={cannoli.id}>
                            <Link to={'/cannoli-accepteren/${cannoli.id}'}>{cannoli.brand}
                                <strong>{cannoli.name}</strong> - {cannoli.ingredient}
                            </Link>
                            ({cannoli.createdDate})
                            <button className="delete-btn" onClick={() => deleteCannoli ( cannoli.id )}>Delete
                                Cannoli</button>
                        </li>
                    } )
                )
            } catch (error) {
                console.error ( "een error met data ophalen", error );
            }
        }

        fetchData ();

    }, [isAdmin, discDeleted] );

    return (
        <div>
            <TextContainer>
                <p>Welkom op de profielpagina. Je kunt hier al je gegevens bekijken</p>
                <p>Terug naar de <Link
                    to="/">Homepagina</Link></p>
            </TextContainer>

            <section>
                <h2>Jouw gegevens</h2>
                <p><strong>Gebruikersnaam:</strong> {username}</p>
                <p><strong>Email:</strong> {userData && userData.emailAdress}</p>
            </section>


            <TextContainer>
                <h2>Strikt geheime profiel-content</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque dolorum error iure magni
                    molestiae nobis perferendis
                    praesentium sapiente ullam?</p>


            </TextContainer>
            {isAdmin &&
                <BookmarkBox verticalText="admin">
                    <h2>{Cannolilist && Cannolilist.length} </h2>
                    <p>Na het inloggen kunt u de inkoopprijs van de cannoli(s) opvragen</p>
                    <p>Klik op de naam van de cannoli om te zien wat de inkoopprijs is.</p>
                    <ul>{CannoliList && CannoliList}</ul>
                </BookmarkBox>
            }

            <TextContainer>
                <button type="button" onClick={logout}>Log uit</button>
            </TextContainer>
        </div>
    );

}

export default Profile;


