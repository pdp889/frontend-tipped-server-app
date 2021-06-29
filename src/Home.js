import React, {useState, useEffect} from "react"

function Stats (props) {
    
    useEffect(() => {
        fetchTopFive();
        fetchPayByEntree();
    }, []);

    const [top5, setTop5] = useState([]);
    const [payEntree, setPayEntree] = useState([]);
    
    //This method fetches the summary top 5 zip code stats from the API.
    const fetchTopFive = async () => {
        const data = await fetch ('https://tipped-server-app.herokuapp.com/api/getTopFiveZips'
        , {
            method: 'GET',
            headers:{
                'Authorization': 'Bearer ' + props.token,
            },
        }
        );
        const topZips = await data.json();
        let zipArray = [];
        Array.from(topZips).forEach(item => {
            zipArray.push([item.zip, item.average]);
        })
        setTop5(zipArray);
    }

    //This method fetches the summary averages per entree category from the API.
    const fetchPayByEntree = async () => {
        const data = await fetch ('https://tipped-server-app.herokuapp.com/api/getAllPayByEntree', {
            method: 'GET',
            headers:{
                'Authorization': 'Bearer ' + props.token,
            },
        }
        );
        const payByEntree = await data.json();
        let entreeArray = [];
        Array.from(payByEntree).forEach(item => {
            entreeArray.push([item.entree_price, item.average]);
        })
        setPayEntree(entreeArray);
    }

    return(
        <div className="d-flex justify-content-center bg-light full-height">
            <div className="w-50 padding-10-px">
                <h1>Welcome to the Omaha Server App</h1>
    
            </div>
            <div className="w-50">
                <div className="card padding-10-px">
                    <h3 className="card-title">Top 5 Zip Codes for Total Hourly Compensation</h3>
                    <div className="card-body">
                        {top5.map((value, index) => {
                            return <div key={index}>
                                {value[0]} | Average Pay: ${value[1]}
                            </div>
                        })}
                    </div>
                </div>
                <div className="card padding-10-px">
                    <h3 className="card-title">Total Hourly Compensation by Restaurant Price Rating</h3>
                    <div className="card-body">
                        {payEntree.map((value, index) => {
                            return <div key={index}>
                                Price Rating: {value[0]} | Average Pay: ${value[1]}
                            </div>
                        })}
                    </div>
                </div>
            </div>
            
        </div>
        
    )

}

export default Stats