import {BaseEntity, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import Flavor from "./Flavor";
import Size from "./Size";
import Product from "./Product";
import {JsonClassType, JsonIgnore, JsonManagedReference, JsonProperty} from "jackson-js";

@Entity()
export default class Pod extends BaseEntity {

    @PrimaryGeneratedColumn()
    @JsonIgnore()
    id: number;

    @OneToOne(() => Product, {cascade: true})
    @JsonProperty()
    @JsonClassType({type: () => [Product]})
    @JsonManagedReference()
    product: Product;

    @ManyToOne(() => Flavor, flavor => flavor.pods, {cascade: true})
    @JsonProperty()
    @JsonClassType({type: () => [Flavor]})
    @JsonManagedReference({value: 'flavor'})
    coffeeFlavor: Flavor;

    @ManyToOne(() => Size, size => size.pods, {cascade: true})
    @JsonProperty()
    @JsonClassType({type: () => [Size]})
    @JsonManagedReference({value: 'size'})
    packSize: Size;
}
