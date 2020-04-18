import React, { Component } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

//pages
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import CreateProject from "./components/projects/CreateProject";
import UserDetails from "./components/user/UserDetails";
import Settings from "./components/user/settings/Settings";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

//redux
import store from "./redux/store";
import { logoutUser, getUserData } from "./redux/actions/userAction";
import { SET_AUTHENTICATED } from "./redux/types";

//components
import Navbar from "./components/layout/Navbar";
import AuthRoute from "./util/AuthRoute";
import PrivateRoute from "./util/PrivateRoute";

axios.defaults.baseURL =
  "https://asia-east2-socialplan-aace6.cloudfunctions.net/api";

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/signin";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route path="/" component={Dashboard} exact />
              <Route path="/users/:handle" component={UserDetails} />
              <PrivateRoute path="/settings" component={Settings} />
              <PrivateRoute
                path="/project/:projectId"
                component={ProjectDetails}
              />
              <PrivateRoute path="/create" component={CreateProject} />
              <AuthRoute path="/signin" component={SignIn} />
              <AuthRoute path="/signup" component={SignUp} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
