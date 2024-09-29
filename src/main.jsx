import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <Router>
      <GoogleOAuthProvider clientId="1018074018102-g03hq4rv5cipmnq95a7e9ucmi2m1dcn6.apps.googleusercontent.com">

        <App />
      </GoogleOAuthProvider>;
    </Router>
  </React.StrictMode>
);
