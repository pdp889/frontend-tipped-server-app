import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./HeaderComponents/Header";
import AddRecord from "./AddRecordComponents/AddRecord";
import StatSearch from "./StatsComponents/StatSearch";
import Jobs from "./JobComponents/Jobs";
import Home from "./Home";
import Login from "./AuthComponents/LoginPage"
import useToken from "./AuthComponents/useToken";
import SignUp from "./AuthComponents/signUp";
import MyRecord from "./MyRecordsComponents/MyRecords";


function App() {

  const { token, setToken } = useToken();

  //If a user is not logged in (i.e. no token), the user cannot view anything besides the login and sign up links
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
         <Home token={token}/>
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
        <Route path="/myRecords" exact render={(props) => (
         <MyRecord token={token}/>
        )} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
