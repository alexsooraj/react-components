import { User } from "./User";

export class SessionData {
  private _user: User | null = null;
  public get user(): User | null {
    return this._user;
  }
  public set user(value: User | null) {
    this._user = value;
  }

  private _jwt: any;
  public get jwt(): any {
    return this._jwt;
  }
  public set jwt(value: any) {
    this._jwt = value;
  }

  private _isLoggedIn: boolean = false;
  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }
  public set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }
}
