import "./style/PayRecordCard.css";

export default function PayRecordCard (props){

    const sendDelete = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + props.token },
            body: JSON.stringify({ payid: props.value.id})
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

    function increase () {
        props.increaseUpdateCount(props.value);
    }

    return (
    <div className="card padding-10-px" >
        <div className='card-body' key={props.index}>
            <p>Pay Record Id: {props.value.id}</p>
            <p>Hourly Pay: {props.value.hourly}</p>
            <p>Weekly Tips: {props.value.tips}</p>
            <p>Weekly Hours: {props.value.hours}</p>
            <p>Restaurant: {props.value.restaurantName}</p>
            <div className="d-flex justify-content-around">
                <button className='btn btn-primary' onClick={sendDelete}>Delete</button>
                <button className='btn btn-primary'onClick={increase}>Update</button>
            </div>
        </div>

        
    </div>
    )
}