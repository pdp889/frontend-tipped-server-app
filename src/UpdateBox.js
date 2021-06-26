import { useState, useEffect } from "react";

export default function UpdateBox (props) {

    useEffect(() => {
        fetchItems()
    },[]);

    const [hourlyPay, setHourlyPay] = useState(props.value[1]);
    const [weeklyTips, setWeeklyTips] = useState(props.value[2]);
    const [weeklyHours, setWeeklyHours] = useState(props.value[3]);
    const [restaurant, setRestaurant] = useState(props.value[4]);
    const [allRestaurants, setAllRestaurants] = useState([]);


    const fetchItems = async () => {
        const data = await fetch ('https://tipped-server-app.herokuapp.com/api/createPay'        , {
            method: 'GET',
            headers:{
                'Authorization': 'Bearer ' + props.token,
            },
        }
        );
        const dataReturn = await data.json();
        let restaurantObjs = [];
        Array.from(dataReturn.restaurants).forEach(item => {
            let arrayedItem = [item._id, item.zip_code, item.name, item.entree_price]
            restaurantObjs.push(arrayedItem);
        })
        setAllRestaurants(restaurantObjs);
    }

    const sendData = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + props.token },
            body: JSON.stringify({ hourly_pay: hourlyPay, weekly_tips: weeklyTips, weekly_hours: weeklyHours, restaurant: restaurant, payid: props.value[0]})
        }
        console.log(requestOptions)
        fetch('https://tipped-server-app.herokuapp.com/api/updatePay', requestOptions)
        .then(response => response.json())
        .then(data => {
            if(data.errors != undefined){
                let array = Array.from(data.errors);
                let errorArray = [];
                array.forEach(item => {
                    errorArray.push(item.msg + "; ")
                })
                    alert(errorArray);
            } else {
                alert('success!');
                props.resetUpdateValue();
            }
            console.log(data) 
            return data;
        })
    }

    const onSubmitTask = (event) => {
        event.preventDefault();
        sendData();

    }

    const onSelectChange = (event) => {
        setRestaurant(event.target.value);
    }

    return (
        <div>
            <h1>Original</h1>
            <div className="card" >
                <p>Pay Record Id: {props.value[0]}</p>
                <p>Hourly Pay: {props.value[1]}</p>
                <p>Weekly Tips: {props.value[2]}</p>
                <p>Weekly Hours: {props.value[3]}</p>
                <p>Restaurant: {props.value[6]}</p>
            </div>
            <div className="fill-in-section">
                <form onSubmit ={e => {onSubmitTask(e)}}>
                    <h1 className="section-header">Update</h1>
                    <input
                        onChange={e => setHourlyPay(e.target.value)}
                        type="number"
                        name="hourly"
                        placeholder="hourly pay"
                        className="fill-in"
                        autoComplete="off"
                        min="1"
                        value={hourlyPay}
                    />
                    <input
                        onChange={e => setWeeklyTips(e.target.value)}
                        type="number"
                        name="weekly tips"
                        placeholder="weekly tips"
                        className="fill-in"
                        autoComplete="off"
                        min="1"
                        value={weeklyTips}
                    />
                    <input
                        onChange={e => setWeeklyHours(e.target.value)}
                        type="number"
                        name="weekly hours"
                        placeholder="weekly hours"
                        className="fill-in"
                        autoComplete="off"
                        min="1"
                        value={weeklyHours}
                    />
                    <select onChange={onSelectChange} value={restaurant}>
                        {allRestaurants.map((value, index) => {
                            return <option key={index} value={value[0]}>{value[2]} | {value[1]}</option>
                        })}
                    </select>
                    <input type="submit" value="Change Pay Record" />
                </form>
                <button onClick={props.resetUpdateValue}>Cancel</button>
            </div>
        </div>

        
    );
}