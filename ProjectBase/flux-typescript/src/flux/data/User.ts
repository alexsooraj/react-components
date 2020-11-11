export class User {
  private _username: string;
  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }

  private _role: string;
  public get role(): string {
    return this._role;
  }
  public set role(value: string) {
    this._role = value;
  }

  constructor(username: string, role: string) {
    this._role = role;
    this._username = username;
  }
}
