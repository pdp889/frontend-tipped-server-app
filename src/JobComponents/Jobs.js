import { useState, useEffect } from "react";
import JobCard from "./JobCard"
import ('./style/Jobs.css');

function Jobs (props) {
    
    const [allJobs, setAllJobs] = useState(['hello paul']);

    useEffect(() => {
        fetchItems();
    },[]);

    // This function fetches the list of jobs and averages from the API, and sets allJobs equal to an arrayed version of the results.
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
            <div className="d-flex justify-content-center bg-light">
                <div className="w-50 padding-10-px">
                    <h1>Now Hiring - 10 great jobs!</h1>
                    <p>These jobs are hiring now!</p>
                </div>
                <div className="w-50">
                    {allJobs.map((value, index) => {
                        return <JobCard index={index} value={value} token={props.token}/>
                    })}
                </div>
            </div>


    )
}

export default Jobs