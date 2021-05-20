import {BaseEntity, Entity, OneToMany, PrimaryColumn} from "typeorm";
import Product from "./Product";
import {JsonClassType, JsonIgnore, JsonProperty} from "jackson-js";

@Entity()
export default class Type extends BaseEntity {

    @PrimaryColumn({name: 'product_type'})
    @JsonProperty()
    @JsonClassType({type: () => [String]})
    productType: string;

    @OneToMany(() => Product, product => product.productType)
    @JsonIgnore()
    products: Product[];
}
