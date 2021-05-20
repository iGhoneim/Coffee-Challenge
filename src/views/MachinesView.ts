import {Connection, ViewColumn, ViewEntity} from "typeorm";
import Product from "../models/Product";
import Type from "../models/Type";
import Machine from "../models/Machine";

@ViewEntity({
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("m.waterLineCompatible", 'waterLineCompatible')
        .addSelect("p.sku", 'sku')
        .addSelect("t.productType", 'productType')
        .from(Machine, "m")
        .leftJoin(Product, "p")
        .leftJoin(Type, "t")
})
export class MachinesView {

    @ViewColumn()
    sku: string;

    @ViewColumn()
    productType: string;

    @ViewColumn()
    waterLineCompatible: string;
}
