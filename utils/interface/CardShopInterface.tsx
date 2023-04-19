import { imageType } from "@/utils/type/imageType";

export interface CardShopInterface {
    Product_name: string;
    product_price: number;
    thumbnail_src: imageType;
    id: number;
}
