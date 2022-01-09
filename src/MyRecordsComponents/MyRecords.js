import { useState, useEffect } from "react";
import PayRecordCard from "./PayRecordCard";
import UpdateBox from "./UpdateBox";
import "./style/MyRecords.css";

export default function MyRecord (props) {
    
    const [deleteCount, setdeleteCount] = useState(0);
    const [updateValue, setUpdateValue] = useState({});
    const [allRecords, setAllRecords] = useState([{}]);
    

    useEffect(() => {
        fetchItems();
    },[deleteCount, updateValue]);

    //This method is used to trigger a re-rendering upon a delete.
    const increaseDeleteCount = () => {
        setdeleteCount(deleteCount+1);
    }

    const resetUpdateValue = () => {
        setUpdateValue({});
    }

    // This method checks if the value id from the update-button-click is the same as the presently displayed update value.
    function changeUpdateValue (value) {
        console.log(updateValue.id);
        console.log(value.id);
        if (!updateValue.id || (updateValue.id != value.id)){
            setUpdateValue(value)
        } else {
            setUpdateValue({})
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
            let objItem = {
                id: item._id,
                zip: item.zip_code,
                name: item.name,
                price: item.entree_price
            }
            restaurantObjs.push(objItem);
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
                if (item.restaurant == restaurant.id){
                    restaurantName = restaurant.name;
                }
            });
            let obj = {
                id: item._id,
                hourly: item.hourly_pay,
                tips: item.weekly_tips,
                hours: item.weekly_hours,
                restaurant: item.restaurant,
                user: item.user,
                restaurantName: restaurantName
            }
            recordObjs.push(obj);
        })
        setAllRecords(recordObjs);
    }

    //if there is no update value, the update box is not displayed. if there is an update value, the update box is displayed along with the record cards.
    if (!updateValue.id){
    return(
        <div className="d-flex flex-row bg-light column-mobile" id="column-mobile-myrecords">
                <div className="custom-column-50 padding-10-px">

                <h1>Current Records</h1>
                <p>These are all of your current records in our database, feel free to update or delete any of them</p>
                </div>
                <div className='custom-column-50'>
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