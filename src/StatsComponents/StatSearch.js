import StatSearchZip from "./StatSearchZip";
import StatSearchZipAndPrice from "./StatSearchZipAndPrice";
function StatSearch (props) {
    return(
        <div className="d-flex flex-row bg-light full-height column-mobile" id="column-mobile">
            <StatSearchZip token={props.token}/>
            <StatSearchZipAndPrice token={props.token}/>
        </div>
    )
}

export default StatSearch