import { observable, action, makeObservable } from "mobx";

class AuthStore {
  users = [{ login: "admin", password: "admin" }];
  isAuthenticated = false;

  setAuthentication(value) {
    this.isAuthenticated = value;
  }

  addUser(login, password) {
    this.users.push({ login, password });
  }

  signIn(login, password) {
    if (this.users.find((user) => user.login === login)) {
      let tempUser = this.users.find((user) => user.login === login);
      if (tempUser.password === password) {
        this.setAuthentication(true);
      } else {
        alert("Password error");
      }
    }else{
      alert("User not found")
    }
  }

  signOut() {
    this.setAuthentication(false);
  }

  constructor() {
    makeObservable(this, {
      users: observable,
      isAuthenticated: observable,
      setAuthentication: action,
      signIn: action,
      signOut: action,
      addUser: action,
    });
  }
}

export default new AuthStore();
