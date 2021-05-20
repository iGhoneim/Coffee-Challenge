import {BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import Product from "./Product";
import {JsonClassType, JsonIgnore, JsonManagedReference, JsonProperty, JsonRootName} from "jackson-js";

@Entity()
@JsonRootName({value: ''})
export default class Machine extends BaseEntity {

    @PrimaryGeneratedColumn()
    @JsonIgnore()
    id: number;

    @OneToOne(() => Product, {cascade: true})
    @JsonProperty()
    @JsonClassType({type: () => [Product]})
    @JsonManagedReference()
    product: Product;

    @Column({name: 'water_line_compatible', default: false})
    @JsonProperty()
    @JsonClassType({type: () => [Boolean]})
    waterLineCompatible: boolean;
}
