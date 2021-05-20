import {Connection, ViewColumn, ViewEntity} from "typeorm";
import Product from "../models/Product";
import Type from "../models/Type";
import Flavor from "../models/Flavor";
import Size from "../models/Size";
import Pod from "../models/Pod";

@ViewEntity({
    expression: (connection: Connection) => connection.createQueryBuilder()
        .addSelect("product.sku", 'sku')
        .addSelect("type.productType", 'productType')
        .addSelect("flavor.coffeeFlavor", 'coffeeFlavor')
        .addSelect("size.packSize", 'packSize')
        .from(Pod, "pod")
        .leftJoin(Product, "product", "product.id = pod.productId")
        .leftJoin(Type, "type", "type.productType = product.productType")
        .leftJoin(Flavor, "flavor", "flavor.coffeeFlavor = pod.coffeeFlavor")
        .leftJoin(Size, "size", "size.packSize = pod.packSize")
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
