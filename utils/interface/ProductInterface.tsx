import { imageType } from "../type/imageType";

export default interface ProductInterface {
    id: number;
    price: number;
    name: string;
    category: "pants" | "shirt" | "hat" | "shoes" | "women clothing";
    total_stock: number;
    carousel_images: Array<imageType>;
    thumbnail_global: imageType;
    short_product_description: string;
    descriptions: Array<
        {
            img: imageType;
            text: string;
        }
    >;
    products: Array<
        {
            color: string;
            available_sizes: Array<{
                stock: number;
                size: string | number;
            }>;
            thumbnail: imageType;
        }
    >;
}
