import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import CannoliContextProvider from "./context/CannoliContext";
import ScreenWidthContextProvider from "./context/ScreenWidthContext";
import { BrowserRouter as Router } from 'react-router-dom';
import AuthContextProvider from "./context/AuthContext";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <AuthContextProvider>
              <CannoliContextProvider>
                  <App/>
              </CannoliContextProvider>
          </AuthContextProvider>
      </Router>
  </React.StrictMode>

);
reportWebVitals();