import express from 'express';
import Fault from "./Fault";

export default interface IMiddleware {

    execute(request: express.Request, response: express.Response, next: express.NextFunction, fault?: Fault);
}
