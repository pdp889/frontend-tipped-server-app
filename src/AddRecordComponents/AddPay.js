import React, {useState, useEffect} from "react"
import './record.css'

function AddPay(props){
    
    useEffect(() => {
        fetchItems()
    },[props]);
    
    const [title, setTitle] = useState('');
    const [hourlyPay, setHourlyPay] = useState('');
    const [weeklyTips, setWeeklyTips] = useState('');
    const [weeklyHours, setWeeklyHours] = useState('');
    const [restaurant, setRestaurant] = useState('');
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [errors, setErrors] = useState([]);

    // This function retrieves the information to populate the new pay form//
    const fetchItems = async () => {
        const data = await fetch ('https://tipped-server-app.herokuapp.com/api/createPay'        , {
            method: 'GET',
            headers:{
                'Authorization': 'Bearer ' + props.token,
            },
        }
        );
        const dataReturn = await data.json();
        setTitle(dataReturn.title);
        let restaurantObjs = [];
        Array.from(dataReturn.restaurants).forEach(item => {
            let arrayedItem = [item._id, item.zip_code, item.name, item.entree_price]
            restaurantObjs.push(arrayedItem);
        })
        setAllRestaurants(restaurantObjs);
        setRestaurant(restaurantObjs[0][0]);
    }

    // This function sends the information to create a new pay record //
    const sendData = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + props.token },
            body: JSON.stringify({ hourly_pay: hourlyPay, weekly_tips: weeklyTips, weekly_hours: weeklyHours, restaurant: restaurant})
        }

        fetch('https://tipped-server-app.herokuapp.com/api/createPay', requestOptions)
        .then(response => response.json())
        .then(data => {
            if(data.errors !== undefined){
                let array = Array.from(data.errors);
                let errorArray = [];
                array.forEach(item => {
                    errorArray.push(item.msg + "; ")
                })
                setErrors(errorArray)
            } else {
                alert('success!');
                setHourlyPay('');
                setWeeklyHours('');
                setWeeklyTips('');
                setErrors([]);
            }
            
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
        <div class="card w-50 h-75">
            <div>
                <form onSubmit ={e => {onSubmitTask(e)}}>
                    <h1>{title}</h1>
                    <label htmlFor='hourly'>Hourly</label>
                    <input
                        onChange={e => setHourlyPay(e.target.value)}
                        type="number"
                        name="hourly"
                        className="form-control"
                        autoComplete="off"
                        min="1"
                        value={hourlyPay}
                    />
                    <label htmlFor='weekly tips'>Weekly Tips</label>
                    <input
                        onChange={e => setWeeklyTips(e.target.value)}
                        type="number"
                        name="weekly tips"
                        className="form-control"
                        autoComplete="off"
                        min="1"
                        value={weeklyTips}
                    />
                    <label htmlFor='weekly hours'>Weekly Hours</label>
                    <input
                        onChange={e => setWeeklyHours(e.target.value)}
                        type="number"
                        name="weekly hours"
                        className="form-control"
                        autoComplete="off"
                        min="1"
                        value={weeklyHours}
                    />
                    <label htmlFor='restaurant'>Restaurant</label>
                    <select name="restaurant" className="form-select" onChange={onSelectChange}>
                        {allRestaurants.map((value, index) => {
                            return <option key={index} value={value[0]}>{value[2]} | {value[1]}</option>
                        })}
                    </select>
                    <input type="submit" className="btn btn-primary record-submit" value="Add Pay Record" />
                </form>
            </div>
            <div>
                {errors}
            </div>
        </div>

        
    );
}

export default AddPay