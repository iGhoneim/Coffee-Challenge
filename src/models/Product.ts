import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Type from "./Type";
import {JsonClassType, JsonIgnore, JsonManagedReference, JsonProperty} from "jackson-js";

@Entity()
export default class Product extends BaseEntity {

    @PrimaryGeneratedColumn()
    @JsonIgnore()
    id: number;

    @Column({nullable: false, unique: true})
    @JsonProperty()
    @JsonClassType({type: () => [String]})
    sku: string;

    @ManyToOne(() => Type, type => type.products, {cascade: true})
    @JoinColumn({name: 'productTypeId'})
    @JsonProperty()
    @JsonClassType({type: () => [Type]})
    @JsonManagedReference({value: 'productType'})
    productType: Type;
}
