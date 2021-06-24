import React, {useState, useEffect} from "react"


function AddPay(){
    
    useEffect(() => {
        fetchItems()
    },[]);
    
    const [title, setTitle] = useState('');
    const [hourlyPay, setHourlyPay] = useState('');
    const [weeklyTips, setWeeklyTips] = useState('');
    const [weeklyHours, setWeeklyHours] = useState('');
    const [restaurant, setRestaurant] = useState('60d3a9fecc29bf0004f808d7');
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [errors, setErrors] = useState([]);


    const fetchItems = async () => {
        const data = await fetch ('https://tipped-server-app.herokuapp.com/api/createPay');
        const dataReturn = await data.json();
        setTitle(dataReturn.title);
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
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ hourly_pay: hourlyPay, weekly_tips: weeklyTips, weekly_hours: weeklyHours, restaurant: restaurant})
        }

        fetch('https://tipped-server-app.herokuapp.com/api/createPay', requestOptions)
        .then(response => response.json())
        .then(data => {
            if(data.errors != undefined){
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
        <div>
            <div className="fill-in-section">
                <form onSubmit ={e => {onSubmitTask(e)}}>
                    <h1 className="section-header">{title}</h1>
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
                    <select onChange={onSelectChange}>
                        {allRestaurants.map((value, index) => {
                            return <option key={index} value={value[0]}>{value[2]} | {value[1]}</option>
                        })}
                    </select>
                    <input type="submit" value="Add Pay Record" />
                </form>
            </div>
            <div>
                {errors}
            </div>
        </div>

        
    );
}

export default AddPay