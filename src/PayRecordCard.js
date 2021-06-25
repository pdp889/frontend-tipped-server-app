import "./PayRecordCard.css";

export default function PayRecordCard (props){
    
    const sendData = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + props.token },
            body: JSON.stringify({ payid: props.value[0]})
        }

        fetch('https://tipped-server-app.herokuapp.com/api/deletePay', requestOptions)
        .then(response => response.json())
        .then(data => {
            if(data.errors != undefined){
                let array = Array.from(data.errors);
                let errorArray = [];
                array.forEach(item => {
                    errorArray.push(item.msg + "; ")
                })
                alert(errorArray)
            } else {
                props.increaseDeleteCount();
                alert('success!');
            }            
            return data;
        })
    }

    return (
    <div>
        <div className="card" key={props.index}>
            <p>Pay Record Id: {props.value[0]}</p>
            <p>Hourly Pay: {props.value[1]}</p>
            <p>Weekly Tips: {props.value[2]}</p>
            <p>Weekly Hours: {props.value[3]}</p>
            <p>Restaurant: {props.value[4]}</p>
        </div>
        <button onClick={sendData}>Delete</button>
        <button>Update</button>
    </div>
    )
}