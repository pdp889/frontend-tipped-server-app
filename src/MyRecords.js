import { useState, useEffect } from "react";
import PayRecordCard from "./PayRecordCard";
import UpdateBox from "./UpdateBox";
import "./MyRecords.css";

export default function MyRecord (props) {
    
    const [deleteCount, setdeleteCount] = useState(0);
    const [updateValue, setUpdateValue] = useState([]);
    const [allRecords, setAllRecords] = useState([[]]);
    

    useEffect(() => {
        fetchItems();
    },[deleteCount, updateValue]);

    const increaseDeleteCount = () => {
        setdeleteCount(deleteCount+1);
    }

    const resetUpdateValue = () => {
        setUpdateValue([]);
    }

    function increaseUpdateCount (value) {
        console.log(updateValue[0]);
        console.log(value[0]);
        if (updateValue[0] != value[0]){
            console.log('changed');
            setUpdateValue(value)
        } else {
            setUpdateValue([])
            console.log('reset');
        }
    }
    
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





    if (!updateValue[0]){
    return(
        <div className="myRecordsContainer">
            <div>
                <h1>Current Records</h1>
                {allRecords.map((value, index) => {
                    return <PayRecordCard index={index} value={value} token={props.token} increaseDeleteCount={increaseDeleteCount} increaseUpdateCount={increaseUpdateCount}/>
                })}
            </div>
        </div>

    )
    } else {
        return(
            <div className="myRecordsContainer">
                <div>
                    <h1>Update box</h1>
                    <div>
                        <UpdateBox value={updateValue} token={props.token} resetUpdateValue={resetUpdateValue}/>
                    </div>
                </div>
            </div>
    
        )
    }
}