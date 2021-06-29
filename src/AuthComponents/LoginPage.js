import React, { useState } from 'react';
import './AuthControl.css'

// This is a helper function to log in a user. It is called in the handleSubmit function when a user clicks log in
async function loginUser(credentials) {
  return fetch('https://tipped-server-app.herokuapp.com/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
  .catch(err => console.log(err));
}

export default function Login(props) {
  
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    if (token.error){
      setMessage(token.error);
    } 
    props.setToken(token);
  }

    return(
      <div className="login-signup">
        <div className='d-flex justify-content-between'>
        <h3>Log In</h3>
        <button className="btn btn-outline-link" onClick={props.toggle}>Back</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
            <input type="text" name='username' className='form-control' onChange={e => setUserName(e.target.value)} />
          <label htmlFor='password'>Password</label>
            <input type="password" className='form-control' onChange={e => setPassword(e.target.value)} />
        </div>
        
        <div className='login-signup-button'>
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
      <div className="text-danger">
        {message}
      </div>
    </div>
  )

}
