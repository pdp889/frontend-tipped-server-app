import ('./Jobs.css')
export default function PayRecordCard (props){

    if (props.value[4] != 'unknown') {
        return (
            <div className="card" >
                <div key={props.index}>
                    <p>Title: {props.value[0]}</p>
                    <p>Restaurant: {props.value[1]}</p>
                    <p>Location: {props.value[2]}</p>
                    <a href={props.value[3]}> Apply/Description </a>
                    <p>Average pay for the zip code: ${props.value[4]}</p>
                </div>
            </div>
            )
    } else {
        return (
            <div className="card" >
                <div key={props.index}>
                    <p>Title: {props.value[0]}</p>
                    <p>Restaurant: {props.value[1]}</p>
                    <p>Location: {props.value[2]}</p>
                    <a href={props.value[3]}> Apply/Description </a>
                </div>
            </div>
            )
    }
    
}