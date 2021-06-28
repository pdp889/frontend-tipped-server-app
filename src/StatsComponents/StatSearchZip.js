import React, {useState} from "react";


function StatSearchZip (props) {

    const [zipCodeSearched, setZipCodeSearched] = useState('');
    const [averages, setAverages] = useState();

    // this method fetches the zip code data from the API, and sets the averages state to the return result.
    const fetchByZip = async () => {
        const data = await fetch ('https://tipped-server-app.herokuapp.com/api/getPayByZip/'+zipCodeSearched        , {
            method: 'GET',
            headers:{
                'Authorization': 'Bearer ' + props.token,
            },
        }
        );
        const zipData = await data.json();
        let average = zipData["average"];
        console.log(average);
        if (average == null){
            average="unknown";
        }
        setAverages(average);
    }

    const onSubmitTask = (event) => {
        event.preventDefault();
        fetchByZip();
    }

    return (
        <div>
            <div className="fill-in-section">
                <form onSubmit ={e => {onSubmitTask(e)}}>
                    <h1 className="section-header">Search By Zip</h1>
                    <input
                        onChange={e => setZipCodeSearched(e.target.value)}
                        type="text"
                        name="zip"
                        placeholder="zip code"
                        className="fill-in"
                        autoComplete="off"
                        minLength="5"
                        maxLength="5"
                        value={zipCodeSearched}
                    />
                    <input type="submit" value="search by zip" />
                </form>
            </div>
            <div>
                {averages}
            </div>
        </div>

        
    );
}

export default StatSearchZip