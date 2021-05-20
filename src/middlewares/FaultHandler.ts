import express from "express";
import IMiddleware from "./IMiddleware";
import Fault from "./Fault";

export default class FaultHandler implements IMiddleware {

    execute(request: express.Request, response: express.Response, next: express.NextFunction, fault: Fault) {
        const status = fault.status || 500;
        const message = fault.message || 'Something went wrong!';
        response.status(status).send({
            status,
            message,
        })
    }
}

