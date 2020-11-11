import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthGurd from "./guards/AuthGurd";
import Edit from "./ui/edit-user/Edit";
import Login from "./ui/login/Login";
import SignUp from "./ui/signup/Signup";
import View from "./ui/view-user/View";

function App(props: any) {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="content">
            <Switch>
              <Route exact path="/login">
                <Login sessionData={props.sessionState}></Login>
              </Route>
              <Route exact path="/signup" component={SignUp} />
              <AuthGurd exact path="/edit" component={Edit} />
              <AuthGurd exact path="/" component={View} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
