import "./style/Header.css";
import {Link} from "react-router-dom"

function Header (props) {

    const logOut = () => {
        sessionStorage.clear();
        props.setToken('');
    }

    return(
        <div className="d-flex justify-content-around bg-primary align-items-center">
            <Link to="/">
            <div className="text-white btn btn-primary">
                    Home  
                </div>
            </Link>
            <Link to="/jobs">
                <div className="text-white btn btn-primary">
                    View Jobs  
                </div>
            </Link>
            <Link to="/addRecord">
                <div className="text-white btn btn-primary">
                    Add Record
                </div>
            </Link>
            <Link to="/stats-search">
                <div className="text-white btn btn-primary">
                    Search Stats  
                </div>
            </Link>
            <Link to="/myRecords">
                <div className="text-white btn btn-primary">
                    My Records
                </div>
            </Link>
            <button className="text-white btn btn-primary" onClick={logOut}>Log Out</button>
        </div>
    )

}
export default Header