import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Type from "./Type";
import {JsonClassType, JsonIgnore, JsonManagedReference, JsonProperty, JsonRootName} from "jackson-js";

@Entity()
@JsonRootName({value: ''})
export default class Product extends BaseEntity {

    @PrimaryGeneratedColumn()
    @JsonIgnore()
    id: number;

    @Column({nullable: false, unique: true})
    @JsonProperty()
    @JsonClassType({type: () => [String]})
    sku: string;

    @ManyToOne(() => Type, type => type.products, {cascade: true})
    @JsonProperty()
    @JsonClassType({type: () => [Type]})
    @JsonManagedReference({value: 'productType'})
    productType: Type;
}
