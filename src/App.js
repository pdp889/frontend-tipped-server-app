import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import AddRecord from "./AddRecord";
import StatSearch from "./StatSearch";
import Jobs from "./Jobs";
import Stats from "./Stats";
import Login from "./LoginPage"
import useToken from "./useToken";
import SignUp from "./signUp";


function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return (
    <div>
      <Login setToken={setToken} />
      <SignUp setToken={setToken}/>
    </div>
    )
  }


  return (
    <BrowserRouter>
      <Header setToken={setToken}/>
      <Switch>
        <Route path="/" exact render={(props) => (
         <Stats token={token}/>
        )} />
        <Route path="/addRecord" exact render={(props) => (
         <AddRecord token={token}/>
        )} />
        <Route path='/jobs' exact render={(props) => (
         <Jobs token={token}/>
        )} />
        <Route path="/stats-search" exact render={(props) => (
         <StatSearch token={token}/>
        )} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
