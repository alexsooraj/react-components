import AppDispatcher from "../dispatcher/AppDispatcher";
import { LoginActionsTypes } from "./LoginActionsTypes";
export default class LoginActions {
  public static login(payload: { username: string; password: string }) {
    AppDispatcher.dispatch({
      type: LoginActionsTypes.LOGIN_USER,
      payload,
    });
  }
  public static loggedIn() {
    AppDispatcher.dispatch({
      type: LoginActionsTypes.LOGGED_IN,
    });
  }
  public static logout() {
    AppDispatcher.dispatch({
      type: LoginActionsTypes.LOGOUT,
    });
  }
  public static signup(payload: {
    firstname: string;
    lastname: string;
    location: string;
    DOB: string;
    email: string;
    username: string;
    password: string;
  }) {
    AppDispatcher.dispatch({
      type: LoginActionsTypes.SIGNUP_USER,
      payload,
    });
  }
}
