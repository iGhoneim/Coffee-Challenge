import {Connection, ViewColumn, ViewEntity} from "typeorm";
import Product from "../models/Product";
import Type from "../models/Type";
import Machine from "../models/Machine";

@ViewEntity({
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("machine.waterLineCompatible", 'waterLine')
        .addSelect("product.sku", 'sku')
        .addSelect("type.productType", 'productType')
        .from(Machine, "machine")
        .leftJoin(Product, "product", "product.id = machine.productId")
        .leftJoin(Type, "type", "type.productType = product.productType")
})
export class MachinesView {

    @ViewColumn()
    sku: string;

    @ViewColumn()
    productType: string;

    @ViewColumn()
    waterLine: string;
}
