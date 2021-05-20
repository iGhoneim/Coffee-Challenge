import ITransformer from "./ITransformer";
import {JsonCreator, ObjectMapper} from "jackson-js";
import Pod from "../models/Pod";

export default class PodTransformer implements ITransformer<Pod> {

    @JsonCreator()
    transform(json: string): Pod {
        return new ObjectMapper().parse<Pod>(json);
    }
}
