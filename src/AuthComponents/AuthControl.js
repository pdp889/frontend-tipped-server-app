import { useState } from "react";
import Login from "./LoginPage";
import SignUp from "./signUp";
import './AuthControl.css'

export default function AuthControl (props){
    const [signUp, setSignUp] = useState(false);

    const toggleSignUp = () => {
        if (signUp === true) {
            setSignUp(false);
        } else {
            setSignUp(true);
        }
    }

    if (signUp){
        return(
            <div className='main-login-section d-flex flex-column justify-content-center' id="login-box-2">
                <SignUp setToken={props.setToken} toggle={toggleSignUp}/>
            </div>
        )
    } else {
        return(
            <div className='main-login-section d-flex flex-column justify-content-center' id="login-box">
                <div className="border-bottom">
                    <h2 className='title d-flex justify-content-around'>Omaha Tips</h2>
                    <h6 className="subheading">For servers in the Omaha, NE metro area to view unofficial pay stats for area restaurants.</h6>
                </div>
                <Login setToken={props.setToken} toggle={toggleSignUp}/>
            </div>
        )
    }
}