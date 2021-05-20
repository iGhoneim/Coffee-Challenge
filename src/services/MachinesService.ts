import {MachinesView} from "../views/MachinesView";
import {getRepository, Like} from "typeorm";

export default class MachinesService {

    getMachines(productType: any, waterLine: any) {
        return getRepository(MachinesView)
            .find({
                productType: Like(productType ? productType : '%'),
                waterLineCompatible: Like(waterLine ? waterLine : '%')
            });
    }
}
