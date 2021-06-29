import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./HeaderComponents/Header";
import AddRecord from "./AddRecordComponents/AddRecord";
import StatSearch from "./StatsComponents/StatSearch";
import Jobs from "./JobComponents/Jobs";
import Home from "./Home";
import AuthControl from "./AuthComponents/AuthControl";
import useToken from "./AuthComponents/useToken";
import MyRecord from "./MyRecordsComponents/MyRecords";
import './App.css'

function App() {

  const { token, setToken } = useToken();

  //If a user is not logged in (i.e. no token), the user cannot view anything besides the login and sign up links
  if(!token) {
    return (
    <div className='row log-in-page'>
      <div className='col'/>
      <div className='col log-in-column justify-content-space-around'>
        <AuthControl setToken={setToken} />       
      </div>
      <div className='col' />
    </div>
    )
  }


  return (
    <BrowserRouter basename={'/frontend-tipped-server-app'}>
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
