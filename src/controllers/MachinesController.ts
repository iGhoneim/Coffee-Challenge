import MachinesService from "../services/MachinesService";
import {Inject} from "typescript-ioc";
import express from "express";
import IController from "./IController";

export default class MachinesController implements IController {

    public path = '/machines';
    public router = express.Router();

    @Inject
    private machinesService: MachinesService;

    constructor() {
        this.initRoutes();
    }

    getMachines = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const productType = request.query.productType;
        const waterLine = request.query.waterLine;
        await this.machinesService.getMachines(productType, waterLine)
            .then(machines => response.send(machines))
            .catch(err => next(err));
    }

    private initRoutes() {
        this.router.get(this.path, this.getMachines);
    }
}
