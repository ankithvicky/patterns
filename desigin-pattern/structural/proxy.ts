interface IAuth {
  doLogin(): void;
  doLogout(): void
}

class Auth implements IAuth {
  doLogin() {
  }
  doLogout() {
  }
}

class AuthLoggerProxy implements IAuth {
  auth: IAuth;
  constructor() {
    this.auth = new Auth();
  }
  doLogin(): void {
    this.auth.doLogin();
    console.log("Login done");
  }
  doLogout(): void {
    this.auth.doLogout();
    console.log("Logout done");
  }
}


class Application {
  constructor(){
    this.init();
  }
  init(){
    new AuthLoggerProxy().doLogin();
  }
}

new Application();


// Can be virutal proxy, protection proxy, logger proxy,remote proxy, caching proxy,  
