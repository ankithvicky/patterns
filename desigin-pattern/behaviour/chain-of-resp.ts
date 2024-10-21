class ClientRequest {
    header: any;
    body: any;
}

interface IHandler {
    handle(data: any): void;
}

class RateLimitterHandler implements IHandler {
    nextHandler: IHandler | undefined;
    handle(data: any): void {
        console.log("Processed Rate limit handler");
        if (!this.nextHandler) return;
        this.nextHandler.handle(data);
    }
    setNextHandler(nextHandler: IHandler) {
        this.nextHandler = nextHandler;
    }
}

class AuthorizationHandler implements IHandler {
    nextHandler: IHandler | undefined;
    handle(data: any): void {
        console.log("Processed Authorization handler");
        if (!this.nextHandler) return;
        this.nextHandler.handle(data);
    }
    setNextHandler(nextHandler: IHandler) {
        this.nextHandler = nextHandler;
    }
}

class AuthHandler implements IHandler {
    nextHandler: IHandler | undefined;
    handle(data: any): void {
        console.log("Processed auth handler");
        if (!this.nextHandler) return;
        this.nextHandler.handle(data);
    }
    setNextHandler(nextHandler: IHandler) {
        this.nextHandler = nextHandler;
    }
}

const authenticationHandler = new AuthHandler();
const authorizationHandler = new AuthorizationHandler();
const rateLimitterHandler = new RateLimitterHandler();

authenticationHandler.setNextHandler(authorizationHandler);
rateLimitterHandler.setNextHandler(authenticationHandler);

rateLimitterHandler.handle(new ClientRequest());
