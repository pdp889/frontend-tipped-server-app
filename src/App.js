import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import AddRecord from "./AddRecord";
import StatSearch from "./StatSearch";
import Jobs from "./Jobs";
import Stats from "./Stats";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Stats} />
        <Route path="/addRecord" exact component={AddRecord} />
        <Route path='/jobs' exact component={Jobs} />
        <Route path="/stats-search" exact component={StatSearch} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
