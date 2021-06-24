import React, {useState, useEffect} from "react";


function StatSearchZip () {

    const [zipCodeSearched, setZipCodeSearched] = useState('');
    const [averages, setAverages] = useState();

    const fetchByZip = async () => {
        const data = await fetch ('https://tipped-server-app.herokuapp.com/api/getPayByZip/'+zipCodeSearched);
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