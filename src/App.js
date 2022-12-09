import React, {useLayoutEffect, useState} from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import './App.css';
import Homepage from "./pages/homepage/Homepage";
import headerImg
    from '../../cannoli-sr-ruffino-frontend/src/assets/img.background/cannoli-background.png'
import Profile from "./pages/profile/Profile";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import Header from "./components/pageLayout/header/Header";
import PrivateRoute from "./components/pageLayout/route/PrivateRoute";
import UserInfo_Form from "./components/form/userInfo_Form/UserInfo_Form";
import {Cart} from "./components/cart/Cart";
import Footer from "./components/pageLayout/footer/Footer";
import Welcome from "./pages/welcome/Welcome";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import SearchCannoli from "./pages/searchCannoli/SearchCannoli";
import SearchResult from "./pages/searchCannoli/SearchResultat";
import CannoliGlutenFree from "./pages/cannoli/CannoliGlutenfree";
import CannoliSnack from "./pages/cannoli/CannoliSnack";
import CannoliVegan from "./pages/cannoli/CannoliVegan";
import Giftbox from "./pages/giftbox/Giftbox";
import FranchiseInformation from "./pages/franchiseInformation/FranchiseInformation";
import CannoliByIngredient from "./components/ingredient/CannoliByIngredient";
import AllCannolis from "./pages/allCannolis/AllCannolis";
import Cart_DeliveryRequest from "./components/cart_DeliveryRequest/Cart_DeliveryRequest";
import OrderList from "./components/orderList/OrderList";
import Service from "./pages/service/Service";
import Contact from "./pages/contact/Contact";
import PrivacyPolicy from "./pages/privacy/PrivacyPolicy";
import FourZeroFour from "./pages/404/FourZeroFour";



function App() {
    const [headerImage, setHeaderImage] = useState(headerImg);
    const [pageTitle, setPageTitle] = useState("Cannoli-sr-ruffino");

    const Wrapper = ({children}) => {
        const location = useLocation();
        useLayoutEffect(() => {
            document.documentElement.scrollTo(0, 0);
        }, [location.pathname]);
        return children
    }


    return (
        <Wrapper>
            <div className="page-container">
                <Header headerImg={headerImage} pageTitle={pageTitle}/>

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

                    <Route path="/ingredient"
                               element={<CannoliByIngredient headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/allCannolis"
                               element={<AllCannolis headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/cannoli"
                               element={<CannoliGlutenFree headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/cannoli"
                               element={<CannoliSnack headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/cannoli"
                               element={<CannoliVegan headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/giftbox"
                               element={<Giftbox headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/franchiseInformation"
                               element={<FranchiseInformation headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/service"
                               element={<Service headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/contact"
                               element={<Contact headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/profile/"
                               element={<PrivateRoute><Profile headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                    <Route path="privacy-policy/"
                               element={<PrivacyPolicy headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/inloggen/"
                               element={<SignIn headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/registreren/"
                               element={<SignUp headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/404/"
                               element={<FourZeroFour headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                    <Route path="/checkout/"
                               element={<PrivateRoute><Cart headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                    <Route path="/cart-instruction/checkout"
                               element={<PrivateRoute><Cart_DeliveryRequest headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                    <Route path="/deliveryRequests/:deliveryRequest_id"
                               element={<PrivateRoute><OrderList headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

                    <Route exact path="/users/:user_id"
                               element={<PrivateRoute><UserInfo_Form headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>
                </Routes>
                    <Footer/>
            </div>
            </Wrapper>
    );
}

export default App;










