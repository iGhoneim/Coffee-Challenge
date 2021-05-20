import ITransformer from "./ITransformer";
import Machine from "../models/Machine";
import {JsonCreator, ObjectMapper} from "jackson-js";

export default class MachineTransformer implements ITransformer<Machine> {

    @JsonCreator()
    transform(json: string): Machine {
        return new ObjectMapper().parse<Machine>(json);
    }
}
