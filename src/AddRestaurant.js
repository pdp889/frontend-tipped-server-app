import React, {useState, useEffect} from "react"


function AddRestaurant(props){
    
    useEffect(() => {
        fetchFormName()
    }, []);
    
    const [title, setTitle] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [name, setName] = useState('');
    const [entree, setEntree] = useState(1);
    const [errors, setErrors] = useState(null);

    const fetchFormName = async () => {
        const data = await fetch ('https://tipped-server-app.herokuapp.com/api/createRestaurant', {
            method: 'GET',
            headers:{
                'Authorization': 'Bearer ' + props.token,
            },
        }
        );
        const dataReturn = await data.json();
        setTitle(dataReturn.title);
    }

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


    const onSubmitTask = (event) => {
        sendData();

    }

    return (
        <div>
            <div className="fill-in-section">
                <form onSubmit ={e => {onSubmitTask(e)}}>
                    <h1 className="section-header">{title}</h1>
                    <input
                        onChange={e => setZipCode(e.target.value)}
                        type="text"
                        name="zip"
                        placeholder="zip code"
                        className="fill-in"
                        autoComplete="off"
                        minLength="5"
                        maxLength="5"
                        value={zipCode}
                    />
                    <input
                        onChange={e => setName(e.target.value)}
                        type="text"
                        name="name"
                        placeholder="restaurant name"
                        className="fill-in"
                        autoComplete="off"
                        value={name}
                    />
                    <input
                        onChange={e => setEntree(e.target.value)}
                        type="text"
                        name="entree"
                        placeholder="entree: 1-5"
                        className="fill-in"
                        autoComplete="off"
                        value={entree}
                    />
                    <input type="submit" value="Add Restaurant" />
                </form>
            </div>
            <div>
                {errors}
            </div>
        </div>

        
    );
}

export default AddRestaurant