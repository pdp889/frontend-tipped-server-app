import { useState } from "react";
import Login from "./LoginPage";
import SignUp from "./signUp";
import './AuthControl.css'

export default function AuthControl (props){
    const [signUp, setSignUp] = useState(false);
    const [login, setLogin] = useState(false);

    const toggleSignUp = () => {
        if (signUp === true) {
            setSignUp(false);
        } else {
            setSignUp(true);
        }
    }

    const toggleLogin = () => {
        if (login === true) {
            setLogin(false);
        } else {
            setLogin(true);
        }
    }

    if (login){
        return(
            <Login setToken={props.setToken} toggle={toggleLogin}/>
        )
    } else if (signUp){
        return(
            <SignUp setToken={props.setToken} toggle={toggleSignUp}/>
        )
    } else {
        return(
            <div className='main-login-section d-flex flex-column justify-content-around'>
                <h2 className='title d-flex justify-content-around'>Omaha Server App</h2>
                <div className='body-login-section d-flex justify-content-around'>
                    <button className='btn btn-primary btn-lg' onClick={toggleSignUp}>Sign Up</button>
                    <button className='btn btn-primary btn-lg' onClick={toggleLogin}>Log In</button>
                </div>
            </div>
        )
    }
}