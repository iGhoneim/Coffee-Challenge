import express from 'express';
import IMiddleware from "./IMiddleware";

export default class LogInterceptor implements IMiddleware {

    execute(request: express.Request, response: express.Response, next: express.NextFunction) {
        console.log(`${request.method} ${request.path}`);
        next();
    }
}
