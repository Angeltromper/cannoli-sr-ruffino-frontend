import React, { createContext, useEffect, useState} from 'react';
import jwtDecode from "jwt-decode";
import axios from "axios";
import isTokenValid from "../helpers/isTokenValid";
import {useNavigate} from "react-router-dom";


export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [auth, toggleIsAuth] = useState ({
        isAuth: false,
        user: null,
        status:'pending',
    });
    let navigate = useNavigate();


    useEffect (() => {
        // is er een token? En zo ja, is deze nog geldig?
        const token = localStorage.getItem ( 'token' );

        if (token && isTokenValid ( token )) {
            const decodedToken = jwtDecode ( token );
            getData ( decodedToken.sub, token );
        } else {
            // als er geen token is doen we niks en zetten we de status op 'done'
            toggleIsAuth ( {
                isAuth: false,
                user: null,
                status: 'done',
            } );
        }
    }, [])

    function login(token) {
        const decodedToken = jwtDecode ( token );
        localStorage.setItem ( 'token', token );
        getData ( decodedToken.sub, token, "/profiel" );
    }

    function logout(e) {
        localStorage.clear ( 'De gebruiker is uitgelogd!' );
        e.preventDefault ();
        toggleIsAuth ({
            isAuth: false,
            user: null,
            status: 'done',
        });
        navigate ( '/' );
    }

    async function getData(id, token, redirectUrl) {
        try {
            const response = await axios.get(`http://localhost:8080/users/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            });
            toggleIsAuth({
                ...auth,
                isAuth: true,
                user: {
                    username: response.data.username,
                },
                status: 'done',
            })



        } catch (error) {
            console.error('There was an error!', error);
            localStorage.clear();
        }
    }


    const contextData = {
        auth: auth.isAuth,
        user: auth.user,
        login: login,
        logout: logout,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {auth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
















