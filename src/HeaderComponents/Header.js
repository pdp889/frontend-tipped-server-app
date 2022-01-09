import "./style/Header.css";
import {Link} from "react-router-dom"
import React, { useState } from 'react';

function Header (props) {

    const logOut = () => {
        sessionStorage.clear();
        props.setToken('');
    }
    const [showOptions, setShowOptions] = useState(false);

    const toggleShowOptions = () => {
        setShowOptions(!showOptions);
    }

    if (!showOptions) {
        return(
            <div>
                <div className="d-flex justify-content-around bg-primary align-items-center" id="header-shown">
                    <Link to="/">
                    <div className="text-white header-button">
                            Home  
                        </div>
                    </Link>
                    <Link to="/jobs">
                        <div className="text-white header-button">
                            View Jobs  
                        </div>
                    </Link>
                    <Link to="/addRecord">
                        <div className="text-white header-button">
                            Add Record
                        </div>
                    </Link>
                    <Link to="/stats-search">
                        <div className="text-white header-button">
                            Search Stats  
                        </div>
                    </Link>
                    <Link to="/myRecords">
                        <div className="text-white header-button">
                            My Records
                        </div>
                    </Link>
                    <div className="text-white header-button logout" onClick={logOut}>Log Out</div>
                </div>
                <div>
                <div className="dropdown hidden">
                    <button className="btn btn-primary dropdown-toggle w-100 dropdown-button" onClick={toggleShowOptions}>
                        Show Menu
                    </button>
                    
                </div>
                </div>
            </div>
        )
    } else {
        return(<div>
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle w-100 dropdown-button" onClick={toggleShowOptions}>
                Hide Menu
            </button>
            <Link to="/">
                <div className="text-white header-button btn-primary dropdown-button">
                        Home  
                    </div>
                </Link>
                <Link to="/jobs">
                    <div className="text-white header-button btn-primary dropdown-button">
                        View Jobs  
                    </div>
                </Link>
                <Link to="/addRecord">
                    <div className="text-white header-button btn-primary dropdown-button">
                        Add Record
                    </div>
                </Link>
                <Link to="/stats-search">
                    <div className="text-white header-button btn-primary dropdown-button">
                        Search Stats  
                    </div>
                </Link>
                <Link to="/myRecords">
                    <div className="text-white header-button btn-primary dropdown-button">
                        My Records
                    </div>
                </Link>
                <div className="text-white header-button btn-primary dropdown-button" onClick={logOut}>Log Out</div>
        </div>
        </div>)
    }



}
export default Header