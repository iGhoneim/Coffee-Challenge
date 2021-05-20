import Machine from "../models/Machine";

export default class MachinesService {

    getMachines(): Promise<Machine[]> {
        return Machine.find();
    }

}
