import React, { useState } from 'react';

// this is an asycn function which signs up a user. It is called in the handleSubmit function which is called when a user clicks sign up.
async function signUser(credentials) {
 return fetch('https://tipped-server-app.herokuapp.com/api/createNewUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
   .then(data => data.json())
   .catch(err => console.log(err));
}

export default function SignUp(props) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await signUser({
      username,
      password
    });
    props.setToken(token);
  }

  return(
      <div>
          <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
