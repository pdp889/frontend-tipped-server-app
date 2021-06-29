import React, {useState, useEffect} from "react"


function AddRestaurant(props){
    
    useEffect(() => {
        fetchFormNameAndZips()
    }, []);
    
    const [title, setTitle] = useState('');
    const [zips, setZips] = useState([]);
    const [zipCode, setZipCode] = useState('51501');
    const [name, setName] = useState('');
    const [entree, setEntree] = useState(1);
    const [errors, setErrors] = useState(null);

    // This function retrieves the information to populate the new restaurant form//
    const fetchFormNameAndZips = async () => {
        const data = await fetch ('https://tipped-server-app.herokuapp.com/api/createRestaurant', {
            method: 'GET',
            headers:{
                'Authorization': 'Bearer ' + props.token,
            },
        }
        );
        const dataReturn = await data.json();
        let sortedZipArray = dataReturn.zips.sort(function(a, b) {return (a < b) ? -1 : (a > b) ? 1 : 0;});
        setZips(sortedZipArray);
        setTitle(dataReturn.title);
    }

    // This function sends the information to create a new restaurant //
    const sendData = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json','Authorization': 'Bearer ' + props.token, },
            body: JSON.stringify({ zip_code: zipCode, name: name, entree_price: entree})
        }

        fetch('https://tipped-server-app.herokuapp.com/api/createRestaurant', requestOptions)
        .then(response => response.json())
        .then(data => {
            if(data.errors != undefined){
                let array = Array.from(data.errors);
                let errorArray = [];
                array.forEach(item => {
                    errorArray.push(item.msg + "; ")
                })
                console.log(errorArray)
                setErrors(errorArray)
            } else {
                alert('success!');
                setZipCode('');
                setName('');
                setEntree(1);
                setErrors([]);
                props.setNewRestaurant();
            }
            
            return data;
        })
    }

    const onSelectChange = (event) => {
        setZipCode(event.target.value);
        
    }

    const onSubmitTask = (event) => {
        event.preventDefault();
        sendData();
        props.setNewRestaurant();
    }

    return (
        <div className="card w-50 h-75 padding-10-px">
            <div>
                <form onSubmit ={e => {onSubmitTask(e)}}>
                    <h1 className="section-header">{title}</h1>
                    <label htmlFor='zip'>Zip Code</label>
                    <select className="form-select" name='zip' onChange={onSelectChange}>
                        {zips.map((value, index) => {
                            return <option key={index} value={value}>{value}</option>
                        })}
                    </select>
                    <label htmlFor='name'>Name</label>
                    <input
                        onChange={e => setName(e.target.value)}
                        type="text"
                        name="name"
                        className="form-control"
                        autoComplete="off"
                        value={name}
                    />
                    <label htmlFor='name'>Restaurant Price Rating (1-5)</label>
                    <input
                        onChange={e => setEntree(e.target.value)}
                        type="text"
                        name="entree"
                        className="form-control"
                        autoComplete="off"
                        value={entree}
                    />
                    <input type="submit" className="btn btn-primary record-submit" value="Add Restaurant" />
                </form>
            </div>
            <div>
                {errors}
            </div>
        </div>

        
    );
}

export default AddRestaurant