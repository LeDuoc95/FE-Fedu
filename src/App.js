import Course from "screens/course";
import Home from "screens/home";
import ActivateCourse from "screens/activate";
import Login from "screens/login";
import UploadCourse from "screens/course/uploadCourse";
import SignUp from "screens/signUp";
import AccountManage from "screens/accountManage";
import TermsAndPrivacyPolicy from "screens/TermsAndPrivacyPolicy";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    // <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/course">
        <Course />
      </Route>
      <Route exact path="/course/:id">
        <UploadCourse />
      </Route>
      <Route path="/activate">
        <ActivateCourse />
      </Route>
      <Route path="/change-password">
        <Login type="change_password" />
      </Route>
      <Route path="/reset-password">
        <Login type="reset_password" />
      </Route>
      <Route path="/login">
        <Login type="login" />
      </Route>
      <Route path="/sign-up">
        <SignUp />
      </Route>
      <Route path="/account-manage">
        <AccountManage />
      </Route>
      <Route path="/terms-of-use">
        <TermsAndPrivacyPolicy type="terms-of-use" />
      </Route>
      <Route path="/privacy-policy">
        <TermsAndPrivacyPolicy type="privacy-policy" />
      </Route>
    </Switch>
    // </Router>
  );
};

export default App;
