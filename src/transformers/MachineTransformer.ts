import ITransformer from "./ITransformer";
import Machine from "../models/Machine";
import {JsonCreator, JsonCreatorMode, ObjectMapper} from "jackson-js";

export default class MachineTransformer implements ITransformer<Machine> {

    @JsonCreator({name: 'serializer', mode: JsonCreatorMode.DELEGATING})
    transform(json: string): Machine {
        return new ObjectMapper().parse<Machine>(json);
    }

    @JsonCreator({name: 'deserializer', mode: JsonCreatorMode.DELEGATING})
    doo(machines: Machine[]): string {
        return new ObjectMapper().stringify<Machine[]>(machines);
    }
}
