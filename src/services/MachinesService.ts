import {MachinesView} from "../views/MachinesView";
import {getRepository} from "typeorm";

export default class MachinesService {

    getMachines(): Promise<MachinesView[]> {
        return getRepository(MachinesView).find();
    }

}
