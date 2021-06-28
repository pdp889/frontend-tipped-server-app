import "./style/Header.css";
import {Link} from "react-router-dom"

function Header (props) {

    const logOut = () => {
        sessionStorage.clear();
        props.setToken('');
    }

    return(
        <div className="header">
            <Link to="/">
                <div>
                    Home  
                </div>
            </Link>
            <Link to="/jobs">
                <div>
                    View Jobs  
                </div>
            </Link>
            <Link to="/addRecord">
                <div>
                    Add record
                </div>
            </Link>
            <Link to="/stats-search">
                <div>
                    Search Stats  
                </div>
            </Link>
            <Link to="/myRecords">
                <div>
                    My Records
                </div>
            </Link>
            <button onClick={logOut}>Log out</button>
        </div>
    )

}
export default Header