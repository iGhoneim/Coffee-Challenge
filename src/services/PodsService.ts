import {getRepository, Like} from "typeorm";
import {PodsView} from "../views/PodsView";

export default class PodsService {

    getPods(productType: any, coffeeFlavor: any, packSize: any): Promise<PodsView[]> {
        return getRepository(PodsView)
            .find({
                productType: Like(productType ? productType : '%'),
                coffeeFlavor: Like(coffeeFlavor ? coffeeFlavor : '%'),
                packSize: Like(packSize ? packSize : '%')
            });
    }
}
