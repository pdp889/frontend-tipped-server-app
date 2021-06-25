import { useState, useEffect } from "react";
import PayRecordCard from "./PayRecordCard";

export default function MyRecord (props) {
    
    const [deleteCount, setdeleteCount] = useState(0);

    useEffect(() => {
        fetchItems()
    },[deleteCount]);

    const increaseDeleteCount = () => {
        setdeleteCount(deleteCount+1);
    }

    const [allRecords, setAllRecords] = useState([[]]);
    
    const fetchItems = async () => {
        const data = await fetch ('https://tipped-server-app.herokuapp.com/api/allPayByUser'        , {
            method: 'GET',
            headers:{
                'Authorization': 'Bearer ' + props.token,
            },
        }
        );
        const dataReturn = await data.json();
        let recordObjs = [];
        Array.from(dataReturn).forEach(item => {
            console.log(item)
            recordObjs.push([item._id, item.hourly_pay, item.weekly_tips, item.weekly_hours, item.restaurant, item.user]);
        })
        setAllRecords(recordObjs);
    }

    return(
        <div>
            {allRecords.map((value, index) => {
                return <PayRecordCard index={index} value={value} token={props.token} increaseDeleteCount={increaseDeleteCount}/>
            })}
        </div>
    )
}