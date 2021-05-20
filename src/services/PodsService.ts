import Pod from "../models/Pod";

export default class PodsService {

    getPods(): Promise<Pod[]> {
        return Pod.find();
    }
}
