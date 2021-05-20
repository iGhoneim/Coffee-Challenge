import {getRepository} from "typeorm";
import {PodsView} from "../views/PodsView";

export default class PodsService {

    getPods(): Promise<PodsView[]> {
        return getRepository(PodsView).find();
    }
}
