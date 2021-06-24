import React, {useState, useEffect} from "react"
import useToken from "./useToken";

function Stats (props) {
    
    useEffect(() => {
        fetchTopFive();
        fetchPayByEntree();
    }, []);

    const [top5, setTop5] = useState([]);
    const [payEntree, setPayEntree] = useState([]);
    
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
        <div className="stats-page">
            <h1>Welcome to the Tipped Server App</h1>
            <h2>Are you being underpaid?</h2>
            <div>
                <h3>Top 5 Zip codes by comp</h3>
                {top5.map((value, index) => {
                    return <div key={index}>
                        Zip: {value[0]} | Average: {value[1]}
                    </div>
                })}
            </div>
            <div>
                <h3>Average Pay by Entree Value Rating</h3>
                {payEntree.map((value, index) => {
                    return <div key={index}>
                        Entree Price: {value[0]} | Average: {value[1]}
                    </div>
                })}
            </div>
        </div>
        
    )

}

export default Stats