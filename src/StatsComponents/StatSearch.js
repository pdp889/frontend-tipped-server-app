import StatSearchZip from "./StatSearchZip";
import StatSearchZipAndPrice from "./StatSearchZipAndPrice";
function StatSearch (props) {
    return(
        <div>
            <StatSearchZip token={props.token}/>
            <StatSearchZipAndPrice token={props.token}/>
        </div>
    )
}

export default StatSearch