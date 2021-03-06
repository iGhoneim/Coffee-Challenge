import {BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import Product from "./Product";
import {JsonClassType, JsonIgnore, JsonManagedReference, JsonProperty} from "jackson-js";

@Entity()
export default class Machine extends BaseEntity {

    @PrimaryGeneratedColumn()
    @JsonIgnore()
    id: number;

    @OneToOne(() => Product, {cascade: true})
    @JoinColumn()
    @JsonProperty()
    @JsonClassType({type: () => [Product]})
    @JsonManagedReference()
    product: Product;

    @Column({name: 'water_line_compatible', default: false})
    @JsonProperty()
    @JsonClassType({type: () => [Boolean]})
    waterLineCompatible: boolean;
}
