import { useState, useEffect } from "react";
import JobCard from "./JobCard"
import ('./Jobs.css');

function Jobs (props) {
    
    const [allJobs, setAllJobs] = useState(['hello paul']);

    useEffect(() => {
        fetchItems();
    },[]);

    const fetchItems = async () => {
        const data = await fetch ('https://tipped-server-app.herokuapp.com/api/scraper', {
            method: 'GET',
            headers:{
                'Authorization': 'Bearer ' + props.token,
            },
        }
        );
        const dataReturn = await data.json();
        console.log(dataReturn);
        let jobsObjs = [];
        Array.from(dataReturn.jobs).forEach(item => {
            let arrayedItem = [item.title, item.restaurant, item.location, item.url, item.average]
            jobsObjs.push(arrayedItem);
        })

        setAllJobs(jobsObjs);
    }

    return(
        <div className="myJobsContainer">
            <div>
                <h1>Now Hiring</h1>
                {allJobs.map((value, index) => {
                    return <JobCard index={index} value={value} token={props.token}/>
                })}
            </div>
        </div>

    )
}

export default Jobs