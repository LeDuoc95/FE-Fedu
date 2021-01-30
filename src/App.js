import Course from "screens/course";
import Home from "screens/home";
import ActivateCourse from "screens/activate";
import Login from "screens/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/course">
          <Course />
        </Route>
        <Route path="/activate">
          <ActivateCourse />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
