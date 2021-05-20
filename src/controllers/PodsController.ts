import {Inject} from "typescript-ioc";
import express from "express";
import PodsService from "../services/PodsService";
import IController from "./IController";

export default class PodsController implements IController {

    public path = '/pods';
    public router = express.Router();

    @Inject
    private podsService: PodsService;

    constructor() {
        this.initRoutes();
    }

    getMachines = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        await this.podsService.getPods()
            .then(pods => response.send(pods))
            .catch(err => next(err));
    }

    private initRoutes() {
        this.router.get(this.path, this.getMachines);
    }
}
