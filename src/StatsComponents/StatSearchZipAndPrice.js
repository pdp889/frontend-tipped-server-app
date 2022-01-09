import React, {useState} from "react";


function StatSearchZipAndPrice (props) {

    const [zipCodeSearched, setZipCodeSearched] = useState('');
    const [entreeSearched, setEntreeSearched] = useState('');
    const [averages, setAverages] = useState();

    //This method fetches the average based on both the zip code and entree searched from the API.
    const fetchByZip = async () => {
        const data = await fetch ('https://tipped-server-app.herokuapp.com/api/getPayByZipAndEntree/'+zipCodeSearched+"/"+entreeSearched        , {
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
        if (average == null){
            average="unknown";
        }
        average = (Math.round(parseFloat(average) * 100) / 100).toFixed(2);
        setAverages(average);
    }

    const onSubmitTask = (event) => {
        event.preventDefault();
        fetchByZip();
    }
    if (averages === 'unknown'){
        return (
            <div className='card custom-column-50custom-height-75 padding-10-px'>
                <div >
                    <form onSubmit ={e => {onSubmitTask(e)}}>
                        <h1 className="section-header">Search By Zip and Restaurant Price Rating</h1>
                        <label htmlFor='Zip'>Zip</label>
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
                        <label htmlFor='entree'>Restaurant Price Rating (1-5)</label>
                        <input
                            onChange={e => setEntreeSearched(e.target.value)}
                            type="text"
                            name="entree"
                            className="form-control"
                            autoComplete="off"
                            value={entreeSearched}
                        />
                        <input type="submit"  className='btn btn-primary search-button' value="Search" />
                    </form>
                </div>
                <div className='text-info'>
                    No records from this zip code and restaurant price rating combination.
                </div>
            </div>
        )
    } else if (averages){
        return (
            <div className='card custom-column-50 custom-height-75 padding-10-px'>
                <div >
                    <form onSubmit ={e => {onSubmitTask(e)}}>
                        <h1 className="section-header">Search By Zip and Restaurant Price Rating</h1>
                        <label htmlFor='Zip'>Zip</label>
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
                        <label htmlFor='entree'>Restaurant Price Rating (1-5)</label>
                        <input
                            onChange={e => setEntreeSearched(e.target.value)}
                            type="text"
                            name="entree"
                            className="form-control"
                            autoComplete="off"
                            value={entreeSearched}
                        />
                        <input type="submit"  className='btn btn-primary search-button' value="Search" />
                    </form>
                </div>
                <div className='text-info'>
                    Result found: ${averages} total compensation per hour
                </div>
            </div>
        )
    } else {
        return (
            <div className='card custom-column-50 custom-height-75 padding-10-px'>
                <div >
                    <form onSubmit ={e => {onSubmitTask(e)}}>
                        <h1 className="section-header">Search By Zip and Restaurant Price Rating</h1>
                        <label htmlFor='Zip'>Zip</label>
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
                        <label htmlFor='entree'>Restaurant Price Rating (1-5)</label>
                        <input
                            onChange={e => setEntreeSearched(e.target.value)}
                            type="text"
                            name="entree"
                            className="form-control"
                            autoComplete="off"
                            value={entreeSearched}
                        />
                        <input type="submit"  className='btn btn-primary search-button' value="Search" />
                    </form>
                </div>
            </div>
        )

    }
}
export default StatSearchZipAndPrice