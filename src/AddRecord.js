import AddPay from "./AddPay";
import AddRestaurant from "./AddRestaurant";
import React, {useState, useEffect} from "react"


function AddRecord () {
    
    const [newRestaurant, setNewRestaurant] = useState(0);

    const update = () => {
        setNewRestaurant(newRestaurant +1);
    }

    return (
        <div>
            <AddPay  />
            <AddRestaurant setNewRestaurant={update}/>
        </div>
    )
}

export default AddRecord