import {BaseEntity, Entity, OneToMany, PrimaryColumn} from "typeorm";
import Pod from "./Pod";
import {JsonClassType, JsonIgnore, JsonProperty, JsonRootName} from "jackson-js";

@Entity()
@JsonRootName({value: ''})
export default class Flavor extends BaseEntity {

    @PrimaryColumn({name: 'coffee_flavor'})
    @JsonProperty()
    @JsonClassType({type: () => [String]})
    coffeeFlavor: string;

    @OneToMany(() => Pod, pod => pod.coffeeFlavor)
    @JsonIgnore()
    pods: Pod[];
}
