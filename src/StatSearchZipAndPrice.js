import React, {useState, useEffect} from "react";


function StatSearchZipAndPrice () {

    const [zipCodeSearched, setZipCodeSearched] = useState('');
    const [entreeSearched, setEntreeSearched] = useState('');
    const [averages, setAverages] = useState();

    const fetchByZip = async () => {
        const data = await fetch ('https://tipped-server-app.herokuapp.com/api/getPayByZipAndEntree/'+zipCodeSearched+"/"+entreeSearched);
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
                    <input
                        onChange={e => setEntreeSearched(e.target.value)}
                        type="text"
                        name="entree"
                        placeholder="entree: 1-5"
                        className="fill-in"
                        autoComplete="off"
                        value={entreeSearched}
                    />
                    <input type="submit" value="search by zip and entree price" />
                </form>
            </div>
            <div>
                {averages}
            </div>
        </div>

        
    );
}

export default StatSearchZipAndPrice