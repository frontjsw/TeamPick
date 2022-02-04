import Register from "./page/Register";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Login from "./page/Login";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
