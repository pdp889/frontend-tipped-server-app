import React, {useState} from "react";
import './stats.css'


export default function StatSearchZip (props) {

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
        average = (Math.round(parseFloat(average) * 100) / 100).toFixed(2);
        if (average == null || average == "NaN"){
            average="unknown";
        }
        setAverages(average);
    }

    const onSubmitTask = (event) => {
        event.preventDefault();
        fetchByZip();
    }

    if (averages === 'unknown'){
        return (
            <div className='card custom-column-50 custom-height-75 padding-10-px'>
                <div>
                    <form onSubmit ={e => {onSubmitTask(e)}}>
                        <h1 className="section-header">Search By Zip</h1>
                        <label htmlFor='zip'>Zip</label>
                        <input
                            onChange={e => setZipCodeSearched(e.target.value)}
                            type="text"
                            name="zip"
                            className="form-control"
                            autoComplete="off"
                            minLength="5"
                            maxLength="5"
                            value={zipCodeSearched}
                        />
                        <input type="submit" className='btn btn-primary search-button' value="Search" />
                    </form>
                </div>
                <div className='text-info'>
                    No records from this zip code.
                </div>
            </div>
    
            
        );
    } else if (averages){
        return (
            <div className='card custom-column-50 custom-height-75 padding-10-px'>
                <div>
                    <form onSubmit ={e => {onSubmitTask(e)}}>
                        <h1 className="section-header">Search By Zip</h1>
                        <label htmlFor='zip'>Zip</label>
                        <input
                            onChange={e => setZipCodeSearched(e.target.value)}
                            type="text"
                            name="zip"
                            className="form-control"
                            autoComplete="off"
                            minLength="5"
                            maxLength="5"
                            value={zipCodeSearched}
                        />
                        <input type="submit" className='btn btn-primary search-button' value="Search" />
                    </form>
                </div>
                <div className='text-info'>
                    Result found: ${averages} total compensation per hour
                </div>
            </div>
    
            
        );
    }
    
    else {
        return (
            <div className='card custom-column-50 custom-height-75 padding-10-px'>
                <div>
                    <form onSubmit ={e => {onSubmitTask(e)}}>
                        <h1 className="section-header">Search By Zip</h1>
                        <label htmlFor='zip'>Zip</label>
                        <input
                            onChange={e => setZipCodeSearched(e.target.value)}
                            type="text"
                            name="zip"
                            className="form-control"
                            autoComplete="off"
                            minLength="5"
                            maxLength="5"
                            value={zipCodeSearched}
                        />
                        <input type="submit" className='btn btn-primary search-button' value="Search"/>
                    </form>
                </div>
            </div>
            
        );
    }

}
