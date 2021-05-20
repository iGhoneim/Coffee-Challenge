import {BaseEntity, Entity, OneToMany, PrimaryColumn} from "typeorm";
import Pod from "./Pod";
import {JsonClassType, JsonIgnore, JsonProperty} from "jackson-js";

@Entity()
export default class Size extends BaseEntity {

    @PrimaryColumn({name: 'pack_size'})
    @JsonProperty()
    @JsonClassType({type: () => [Number]})
    packSize: number;

    @OneToMany(() => Pod, pod => pod.packSize)
    @JsonIgnore()
    pods: Pod[];
}
