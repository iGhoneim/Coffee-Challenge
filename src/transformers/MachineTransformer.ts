import ITransformer from "./ITransformer";
import Machine from "../models/Machine";
import {JsonCreator, JsonCreatorMode, ObjectMapper} from "jackson-js";

export default class MachineTransformer implements ITransformer<Machine> {

    @JsonCreator({mode: JsonCreatorMode.DELEGATING})
    transform(json: string): Machine {
        return new ObjectMapper().parse<Machine>(json);
    }
}
