import ('./style/Jobs.css')
export default function PayRecordCard (props){

    // This checks if the value of the average pay for the card's zip code is unknown or not. 
    // If it is unknown, the card is rendered without the average pay statement.

    if (props.value.average !== 'NaN') {
        return (
            <div className="card padding-10-px" >
                <div key={props.index}>
                    <p>Title: {props.value.title}</p>
                    <p>Restaurant: {props.value.restaurant}</p>
                    <p>Location: {props.value.location}</p>
                    <a href={props.value.url}> Apply/Description </a>
                    <p>Average pay for the zip code: ${props.value.average}</p>
                </div>
            </div>
            )
    } else {
        return (
            <div className="card padding-10-px" >
                <div key={props.index}>
                    <p>Title: {props.value.title}</p>
                    <p>Restaurant: {props.value.restaurant}</p>
                    <p>Location: {props.value.location}</p>
                    <a href={props.value.url}> Apply/Description </a>
                </div>
            </div>
            )
    }
    
}