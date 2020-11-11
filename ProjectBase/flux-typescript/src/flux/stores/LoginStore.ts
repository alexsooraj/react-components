import { ReduceStore } from "flux/utils";
import { LoginActionsTypes } from "../actions/LoginActionsTypes";
import Action from "../data/Action";
import AppDispatcher from "../dispatcher/AppDispatcher";
import { SessionData } from "./../data/SessionData";
import { APIUtil } from "../../utils/APIUtil";
import { AuthUtil } from "../../utils/AuthUtil";
import LoginActions from "./../actions/LoginActions";

class LoginStore extends ReduceStore<SessionData, Action> {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState(): SessionData {
    return new SessionData();
  }

  reduce(state: SessionData, action: Action) {
    switch (action.type) {
      case LoginActionsTypes.LOGIN_USER: {
        return this.authenticateUser(action, state);
      }
      case LoginActionsTypes.SIGNUP_USER: {
        return this.signupUser(action, state);
      }
      case LoginActionsTypes.LOGGED_IN:
        const newState = new SessionData();
        newState.isLoggedIn = true;
        return newState;
      case LoginActionsTypes.LOGOUT:
        AuthUtil.isLoggedIn = false;
        return new SessionData();;
      default:
        return state;
    }
  }

  private signupUser(action: Action, state: SessionData) {
    APIUtil.post("/signup", action.payload)
      .then(() => {
        console.log("signup completed");
      })
      .catch((err) => {
        console.log(err);
      });
    return state;
  }

  private authenticateUser(action: Action, state: SessionData) {
    APIUtil.post("/login", action.payload)
      .then((token) => {
        localStorage.setItem("jwt", token);
        AuthUtil.isLoggedIn = true;
        LoginActions.loggedIn();
      })
      .catch((err) => {
        console.log(err);
      });
    return state;
  }
}

export default new LoginStore();
