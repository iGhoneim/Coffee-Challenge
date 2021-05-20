import 'reflect-metadata';
import 'dotenv/config';
import Bootstrap from "./src/Bootstrap";
import MachinesController from "./src/controllers/MachinesController";
import PodsController from "./src/controllers/PodsController";
import LogInterceptor from "./src/middlewares/LogInterceptor";
import FaultHandler from "./src/middlewares/FaultHandler";


const PORT = Number(process.env.PORT) || 8080;

new Bootstrap(PORT, [
    new LogInterceptor(),
    new FaultHandler()
], [
    new MachinesController(),
    new PodsController()
]).listen();
