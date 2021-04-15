import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import google from '../../../images/google.png'
import './Login.css'
import { UserContext } from '../../../App';
import NavBar from '../../Shared/Navbar/NavBar';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
} else {
    firebase.app()
}


const Login = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            // Send token to your backend via HTTPS
            // ...
            sessionStorage.setItem('token', idToken)
        }).catch(function (error) {
            // Handle error
        });
    }

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const credential = result.credential;
                const token = credential.accessToken;
                const user = result.user;
                setUserToken()
                setLoggedInUser(user);
                history.replace(from);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
            });
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="login-container">
                <div className="login-info">
                    <h1>Login With</h1>
                    <img src={google} alt="" />
                </div>
                <button className="login-btn" onClick={handleGoogleSignIn}>Continue with Google</button>

            </div>
        </div>
    );
};

export default Login;