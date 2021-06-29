import { useState, useEffect } from "react";
import PayRecordCard from "./PayRecordCard";
import UpdateBox from "./UpdateBox";
import "./style/MyRecords.css";

export default function MyRecord (props) {
    
    const [deleteCount, setdeleteCount] = useState(0);
    const [updateValue, setUpdateValue] = useState([]);
    const [allRecords, setAllRecords] = useState([[]]);
    

    useEffect(() => {
        fetchItems();
    },[deleteCount, updateValue]);

    //This method is used to trigger a re-rendering upon a delete.
    const increaseDeleteCount = () => {
        setdeleteCount(deleteCount+1);
    }

    const resetUpdateValue = () => {
        setUpdateValue([]);
    }

    // This method checks if the value id from the update-button-click is the same as the presently displayed update value.
    function changeUpdateValue (value) {
        console.log(updateValue[0]);
        console.log(value[0]);
        if (updateValue[0] != value[0]){
            setUpdateValue(value)
        } else {
            setUpdateValue([])
        }
    }
    // This method fetches a list of all restaurants and all pay records for the logged-in user, and sets the value of the user's records to allRecords
    const fetchItems = async () => {
        const data = await fetch ('https://tipped-server-app.herokuapp.com/api/getRestaurants', {
            method: 'GET',
            headers:{
                'Authorization': 'Bearer ' + props.token,
            },
        }
        );
        const dataReturn = await data.json();
        let restaurantObjs = [];
        Array.from(dataReturn).forEach(item => {
            let arrayedItem = [item._id, item.zip_code, item.name, item.entree_price]
            restaurantObjs.push(arrayedItem);
        })

        const data2 = await fetch ('https://tipped-server-app.herokuapp.com/api/allPayByUser', {
            method: 'GET',
            headers:{
                'Authorization': 'Bearer ' + props.token,
            },
        }
        );
        const dataReturn2 = await data2.json();
        let recordObjs = [];
        
        Array.from(dataReturn2).forEach(item => {
            let restaurantName = '';
            restaurantObjs.forEach(restaurant => {
                if (item.restaurant == restaurant[0]){
                    restaurantName = restaurant[2];
                }
            })
            recordObjs.push([item._id, item.hourly_pay, item.weekly_tips, item.weekly_hours, item.restaurant, item.user, restaurantName]);
        })
        setAllRecords(recordObjs);
    }

    //if there is no update value, the update box is not displayed. if there is an update value, the update box is displayed along with the record cards.
    if (!updateValue[0]){
    return(
        <div className="d-flex flex-row bg-light">
                <div className="w-50">

                <h1>Current Records</h1>
                <p>These are all of your current records in our database, feel free to update or delete any of them</p>
                </div>
                <div className='w-50'>
                    {allRecords.map((value, index) => {
                        return <PayRecordCard index={index} value={value} token={props.token} increaseDeleteCount={increaseDeleteCount} increaseUpdateCount={changeUpdateValue}/>
                    })}
                </div>

        </div>

    )
    } else {
        return(
            <div>
                <UpdateBox value={updateValue} token={props.token} resetUpdateValue={resetUpdateValue}/>
            </div>
    
        )
    }
}