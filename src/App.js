import {Routes, Route, useLocation } from 'react-router-dom';
import {useLayoutEffect, useState} from 'react';
import './App.css';

import Nav from "./components/pageItems/nav/Nav";
import PublicRoute from "./components/pageItems/route/PublicRoute";
import Homepage from "./pages/homepage/Homepage";
import Profile from "./pages/profile/Profile";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import PrivateRoute from "./components/pageItems/route/PrivateRoute";
import Footer from "./components/pageItems/footer/Footer";
import Welcome from "./pages/welcome/Welcome";
import SignIn from "./pages/account/SignIn";
import SignUp from "./pages/account/SignUp";
import SearchCannoli from "./pages/searchCannoli/SearchCannoli"
import SearchResult from "./pages/searchCannoli/SearchResultat";
import CannoliView from "./pages/cannoliView/CannoliView";
import Cannoli from "./pages/cannoli/Cannoli";
import Giftbox from "./pages/giftbox/Giftbox";
import Franchise from "./components/franchise/Franchise";
import Service from "./pages/service/Service";
import Contact from "./pages/contact/Contact";
import ApproveCannoli from "./pages/privacy/ApproveCannoli";
import PrivacyPolicy from "./pages/privacy/PrivacyPolicy";
import Faq from "/pages/privacy/Faq";
import FourZeroFour from "./pages/404/FourZeroFour";
import { AuthContext } from './context/AuthContext';


function App() {
    const [headerImage, setHeaderImage] = useState ( headerImg );
    const [pageTitle, setPageTitle] = useState ( "Cannoli-sr-ruffino" );

    const Wrapper = ({children}) => {
        const location = useLocation ();
        useLayoutEffect ( () => {
            document.documentElement.scrollTo ( 0, 0 );
        }, [location.pathname] );
        return children
    }


    return (
        <Wrapper>
            <div className="container">
                <Header headerImage={headerImage} pageTitle={pageTitle}/>

                <Routes>
                    <Route path="/*"
                           element={<Homepage headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/forgotPassword"
                           element={<ForgotPassword headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/welcome"
                           element={<Welcome headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/searchCannoli"
                           element={<SearchCannoli headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/searchResult"
                           element={<SearchResult headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/cannoliView/:id"
                           element={<CannoliView headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/cannoli"
                           element={<Cannoli headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/giftbox"
                           element={<Giftbox headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/franchise"
                           element={<Franchise headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/service"
                           element={<Service headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/contact"
                           element={<Contact headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/profile"
                           element={<PrivateRoute><Profile headerImageHandler={setHeaderImage}=pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                    <Route path="/faq/"
                           element={<Faq headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="privacy-policy/"
                           element={<PrivacyPolicy headerImageHandler={setHeaderImage}=pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/inloggen/"
                           element={<SignIn headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/registreren/"
                           element={<SignUp headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/cannoli-accepteren/:cannoliId"
                           element={<PrivateRoute><ApproveCannoli headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>
                </Routes>
                <Footer/>
            </div>
        </Wrapper>
    );
}



export default App;