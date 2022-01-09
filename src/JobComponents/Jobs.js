import { useState, useEffect } from "react";
import JobCard from "./JobCard"
import ('./style/Jobs.css');

function Jobs (props) {
    
    const [allJobs, setAllJobs] = useState(['']);

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
        let jobsObjs = [];
        Array.from(dataReturn.jobs).forEach(item => {
            let averageFloat  = (Math.round(parseFloat(item.average) * 100) / 100).toFixed(2);
            let objItem = {
                title: item.title,
                restaurant: item.restaurant,
                location: item.location,
                url: item.url,
                average: averageFloat
            };
            jobsObjs.push(objItem);
        })

        setAllJobs(jobsObjs);
    }

    return(
            <div className="d-flex justify-content-center bg-light column-mobile" id="column-mobile-jobs">
                <div className="padding-10-px custom-column-50">
                    <h1>Now Hiring - 10 great jobs!</h1>
                    <p>These jobs are hiring now!</p>
                </div>
                <div className="custom-column-50">
                    {allJobs.map((value, index) => {
                        return <JobCard index={index} key={index*7} value={value} token={props.token}/>
                    })}
                </div>
            </div>


    )
}

export default Jobs