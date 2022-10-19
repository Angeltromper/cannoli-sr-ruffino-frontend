import React, {useState} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";

import Welcome from "./pages/welcome/Welcome";
import SignIn from "./pages/account/SignIn";
import SignUp from "./pages/account/SignUp";
import AllCannolis from "./pages/allCannolis/AllCannolis";
import headerImg
    from '../../cannoli-sr-ruffino-frontend/src/assets/header/Background header 3@2x.png'
import Contact from "./pages/contact/Contact";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import Franchise from "./pages/franchise/Franchise";
import Giftbox from "./components/giftbox/Giftbox";
import GlutenFreeCannoli from "./pages/glutenfreeCannoli/GlutenFreeCannoli";
import Help from "./pages/help/Help";
import Information from ".pages/information/Information";
import CannoliByIngredient from ".pages/ingredient/CannoiByIngriedent";
import Cookies from ".pages/privacy/Cookies";
import Disclaimer from ".pages/privacy/Disclaimer";
import General from ".pages/privacy/General";
import Product from ".pages/productPages/Product";
import Profile from "./pages/profile/Profile";
import SearchCannoli from ".pages/searchCannoli/SearchCannoli";
import SearchResultat from ".pages/searchCannoli/SearchResultat";
import UserInfoForm from ".pages/user/UserInfoForm";
import FourZeroFour from "./pages/404/FourZeroFour";
import PrivateRoute from "./components/pageItems/route/PrivateRoute";
import Header from "./components/pageItems/header/Header";
import Footer from "./components/pageItems/footer/Footer";


function App() {

  const [headerImage, setHeaderImage] = useState(headerImg);
  const [pageTitle, setPageTitle] = useState("Cannoli-Sr-Ruffino");


  return (
      <div className= "container">
          <Header headerImage={headerImage} pageTitle={pageTitle}/>i

          <Routes>
              <Route path="/*"
                     element={<Welcome headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

              <Route path="/inloggen/*"
                     element={<SignIn headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

              <Route path="/registreren/*"
                     element={<SignUp headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

              <Route path="/overzicht Cannolis/*"
                     element={<AllCannolis headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

              <Route path="/contact/*"
                     element={<Contact headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

              <Route path="/wachtwoord-opnieuw-aanvragen/*"
                     element={<ForgotPassword headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

              <Route path="/franchise/*"
                     element={<Franchise headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

              <Route path="/giftbox/*"
                     element={<Giftbox headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>


              <Route path="/Cannolis-glutenvrij/*"
                   element={<GlutenFreeCannoli headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

              <Route path="/help/*"
                     element={<Help headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

              <Route path="/informatie/*"
                     element={<Information headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

              <Route path="/Cannoli-ingredienten/*"
                     element={<CannoliByIngredient headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

              <Route path="/akkoord website*"
                     element={<Cookies headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

              <Route path="/disclaimer/*"
                     element={<Disclaimer headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

              <Route path="/general/*"
                     element={<General headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

              <Route path="/pagina-producten/*"
                     element={<Product headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

              <Route path="/profiel/*"
                     element={<Profile headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

              <Route path="/cannoli-zoeken/*"
                     element={<SearchCannoli headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

              <Route path="/zoek-resultaat/*"
                     element={<SearchResultat headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

              <Route path="/Gebruikershandleiding/*"
                     element={<UserInfoForm headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

              <Route path="/404-pagina-niet-gevonden/*"
                     element={<FourZeroFour headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

              <Route path="/Profiel/*"
                     element={<PrivateRoute><Profile headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/></PrivateRoute>}/>

          </Routes>
          <Footer>
                  <p>Eindopdracht Full-Stack Developer NOVI College / Angelique Tromper / Copyright © 2022 Cannoli-sr-ruffino/ Alle rechten voorbehouden. </p>
          </Footer>
          </div>
  );
}

export default App;
