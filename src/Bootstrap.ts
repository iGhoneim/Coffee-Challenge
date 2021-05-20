import {createConnection} from "typeorm";
import express from "express";
import {Inject} from "typescript-ioc";
import LogInterceptor from "./middlewares/LogInterceptor";
import IController from "./controllers/IController";
import IMiddleware from "./middlewares/IMiddleware";

export default class Bootstrap {

    public app: express.Application;
    public port: number;

    @Inject
    private logInterceptor: LogInterceptor;

    constructor(port: number, middlewares: IMiddleware[], controllers: IController[]) {
        this.app = express();
        this.port = port;

        this.connectDatabase();
        this.initMiddlewares(middlewares);
        this.initControllers(controllers);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Server started! [${this.port}]`);
        });
    }

    private connectDatabase() {
        createConnection()
            .then(() => {
                console.log("Database connected!")
            }).catch((err => {
            console.error(err);
        }));
    }

    private initMiddlewares(middlewares: IMiddleware[]) {
        middlewares.forEach((middleware) => {
            this.app.use(middleware.execute);
        })
    }

    private initControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }
}
