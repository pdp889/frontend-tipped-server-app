import "./Header.css";
import {Link} from "react-router-dom"

function Header () {

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
            
        </div>
    )

}
export default Header