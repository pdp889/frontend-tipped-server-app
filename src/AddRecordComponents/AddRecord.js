import AddPay from "./AddPay";
import AddRestaurant from "./AddRestaurant";
import React, {useState, useEffect} from "react"


function AddRecord (props) {
    
    const [newRestaurant, setNewRestaurant] = useState(0);

    const update = () => {
        setNewRestaurant(newRestaurant +1);
    }

    return (
        <div className="d-flex flex-row bg-light full-height">
            <AddRestaurant setNewRestaurant={update} token={props.token}/>
            <AddPay  token={props.token}/>
        </div>
    )
}

export default AddRecord