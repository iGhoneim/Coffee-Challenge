import {Connection, ViewColumn, ViewEntity} from "typeorm";
import Product from "../models/Product";
import Type from "../models/Type";
import Flavor from "../models/Flavor";
import Size from "../models/Size";
import Pod from "../models/Pod";

@ViewEntity({
    expression: (connection: Connection) => connection.createQueryBuilder()
        .addSelect("p.sku", 'sku')
        .addSelect("t.productType", 'productType')
        .addSelect("f.coffeeFlavor", 'coffeeFlavor')
        .addSelect("s.packSize", 'packSize')
        .from(Pod, "m")
        .leftJoin(Product, "p")
        .leftJoin(Type, "t")
        .leftJoin(Flavor, "f")
        .leftJoin(Size, "s")
})
export class PodsView {

    @ViewColumn()
    sku: string;

    @ViewColumn()
    productType: number;

    @ViewColumn()
    coffeeFlavor: string;

    @ViewColumn()
    packSize: string;
}
