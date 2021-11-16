import { Route, Switch } from "react-router-dom";
import FilterResult from "./pages/FilterResult";
import Home from "./pages/Home";
import ViewPokemon from './pages/ViewPokemon'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/:name" component={ViewPokemon} exact />
        <Route path="/filter" component={FilterResult} exact />
      </Switch>
      <br />
    </div>
  );
}

export default App;
